"use client";

import { useState, useEffect, useRef } from "react";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Form states
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        githubUrl: ""
    });
    const [editingId, setEditingId] = useState(null);
    const [tagInput, setTagInput] = useState("");
    const [image, setImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            if (Array.isArray(data)) {
                setProjects(data);
            }
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        try {
            const res = await fetch(`/api/projects?id=${id}`, {
                method: 'DELETE'
            });
            
            if (res.ok) {
                setProjects(prev => prev.filter(p => p._id !== id));
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            console.error("Error deleting project", error);
        }
    };

    const handleToggleFeatured = async (project) => {
        // Count currently featured projects if we are enabling a new one
        if (!project.featured) {
            const featuredCount = projects.filter(p => p.featured).length;
            if (featuredCount >= 3) {
                alert("You can only select up to 3 projects. Please unselect one first.");
                return;
            }
        }

        const newFeatured = !project.featured;
        
        // Optimistic update
        setProjects(prev => prev.map(p => 
            p._id === project._id ? { ...p, featured: newFeatured } : p
        ));

        try {
            const formData = new FormData();
            formData.append('id', project._id);
            formData.append('featured', newFeatured);

            const res = await fetch("/api/projects", {
                method: "PUT",
                body: formData,
            });

            if (!res.ok) {
                // Revert if failed
                setProjects(prev => prev.map(p => 
                    p._id === project._id ? { ...p, featured: !newFeatured } : p
                ));
                alert("Failed to update featured status");
            }
        } catch (err) {
            console.error("Error updating featured status", err);
            // Revert
             setProjects(prev => prev.map(p => 
                p._id === project._id ? { ...p, featured: !newFeatured } : p
            ));
        }
    };

    const handleEdit = (project) => {
        setEditingId(project._id);
        setFormData({
            title: project.title,
            description: project.description,
            tags: project.tags,
            demoUrl: project.demoUrl || "",
            githubUrl: project.githubUrl || ""
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({
            title: "",
            description: "",
            tags: [],
            demoUrl: "",
            githubUrl: ""
        });
        setImage(null);
        setTagInput("");
        if(fileInputRef.current) fileInputRef.current.value = "";
    };

    // Form Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!formData.tags.includes(tagInput.trim())) {
                setFormData(prev => ({
                    ...prev,
                    tags: [...prev.tags, tagInput.trim()]
                }));
            }
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            alert("Please select an image");
            return;
        }

        setIsSubmitting(true);
        const data = new FormData();
        data.append("image", image);
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("tags", formData.tags.join(","));
        data.append("demoUrl", formData.demoUrl);
        data.append("githubUrl", formData.githubUrl);

        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                const newProject = await res.json();
                setProjects(prev => [newProject, ...prev]);
                // Reset form
                setFormData({
                    title: "",
                    description: "",
                    tags: [],
                    demoUrl: "",
                    githubUrl: ""
                });
                setImage(null);
                setTagInput("");
                if(fileInputRef.current) fileInputRef.current.value = "";
                alert("Project added successfully!");
            } else {
                const err = await res.json();
                alert("Failed to add project: " + err.error);
            }
        } catch (err) {
            console.error("Error adding project", err);
            alert("An error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 mb-2 px-2 py-0.5 rounded border border-primary/30 bg-primary/5">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Portfolio Project Management</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Project_Manager</h2>
                </div>
            </header>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Current_Deployments ({filteredProjects.length})</h3>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                                <input 
                                    className="bg-surface-dark border border-border-dark rounded-md pl-9 pr-4 py-2 text-[10px] text-white focus:outline-none focus:border-primary w-48 uppercase tracking-widest" 
                                    placeholder="Search logs..." 
                                    type="text" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    
                    {loading ? (
                        <div className="text-center py-10 text-slate-500">Loading projects...</div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="text-center py-10 text-slate-500">No projects found.</div>
                    ) : (
                        filteredProjects.map(project => (
                            <div key={project._id} className="bg-surface-dark border border-border-dark p-6 rounded-lg flex items-center gap-6 group hover:border-primary/30 transition-all overflow-hidden">
                                <div className="w-20 h-20 bg-background-dark border border-border-dark rounded overflow-hidden flex-shrink-0 relative">
                                    <img alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50" src={project.image} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-[10px] text-primary font-bold">#{project._id.slice(-6)}</span>
                                        <h4 className="font-bold text-white uppercase tracking-tight">{project.title}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-3 line-clamp-1">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleToggleFeatured(project)}
                                        className={`size-10 flex items-center justify-center rounded border ${project.featured ? 'border-primary text-primary' : 'border-border-dark text-slate-500 hover:text-primary hover:border-primary'} transition-all`}
                                        title={project.featured ? "Remove from Selected Works" : "Add to Selected Works"}
                                    >
                                        <span className="material-symbols-outlined text-lg">{project.featured ? 'star' : 'star_border'}</span>
                                    </button>
                                    <button 
                                        onClick={() => handleEdit(project)}
                                        className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-primary text-slate-500 hover:text-primary transition-all"
                                    >
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(project._id)}
                                        className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-red-500 text-slate-500 hover:text-red-500 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-surface-dark border border-primary/20 p-8 rounded-lg sticky top-10">
                        <div className="mb-8 border-b border-border-dark pb-4">
                            <h3 className="text-white font-bold text-lg uppercase tracking-widest italic flex items-center gap-2">
                                <span className="size-2 bg-primary animate-pulse"></span>
                                Project_Entry
                            </h3>
                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Project_Name</label>
                                <input 
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-background-dark border border-border-dark rounded px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                                    placeholder="Enter identification string..." 
                                    type="text" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Technical_Description</label>
                                <textarea 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-background-dark border border-border-dark rounded px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none" 
                                    placeholder="Payload details..." 
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tech_Stack_Tags</label>
                                <div className="flex flex-wrap gap-2 p-3 bg-background-dark border border-border-dark rounded min-h-[44px]">
                                    {formData.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] rounded flex items-center gap-1">
                                            {tag} <span onClick={() => removeTag(tag)} className="material-symbols-outlined text-[10px] cursor-pointer hover:text-white">close</span>
                                        </span>
                                    ))}
                                    <input 
                                        className="flex-1 bg-transparent border-none p-0 text-[10px] text-slate-400 focus:ring-0 uppercase outline-none" 
                                        placeholder="Type & Enter..." 
                                        type="text" 
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={handleTagKeyDown}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Image_Asset</label>
                                <input 
                                    type="file" 
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-border-dark rounded-lg p-8 flex flex-col items-center justify-center group hover:border-primary/50 cursor-pointer transition-all"
                                >
                                    <span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-primary mb-2">upload_file</span>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">
                                        {image ? image.name : "Drop_Asset_Here"}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">URLs</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <input 
                                        name="demoUrl"
                                        value={formData.demoUrl}
                                        onChange={handleInputChange}
                                        className="w-full bg-background-dark border border-border-dark rounded px-3 py-2 text-xs text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                                        placeholder="Demo URL..." 
                                        type="text" 
                                    />
                                    <input 
                                        name="githubUrl"
                                        value={formData.githubUrl}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-background-dark border border-border-dark rounded px-3 py-2 text-xs text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                                        placeholder="GitHub URL..." 
                                        type="text" 
                                    />
                                </div>
                            </div>
                            <div className="pt-4 flex gap-4">
                                <button 
                                    disabled={isSubmitting}
                                    className="flex-1 bg-primary text-background-dark py-4 rounded font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all disabled:opacity-50" 
                                    type="submit"
                                >
                                    {isSubmitting ? "Committing..." : "Commit_Changes"}
                                </button>
                                <button 
                                    className="px-6 py-4 rounded border border-border-dark text-slate-500 hover:text-white transition-all uppercase text-[10px] font-bold" 
                                    type="button"
                                    onClick={() => {
                                        setFormData({
                                            title: "",
                                            description: "",
                                            tags: [],
                                            demoUrl: "",
                                            githubUrl: ""
                                        });
                                        setImage(null);
                                        setTagInput("");
                                    }}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="fixed bottom-0 left-64 right-0 border-t border-border-dark bg-background-dark/90 backdrop-blur-md px-6 py-2 flex items-center justify-between z-40">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Online</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        DB_Lat: <span className="text-primary">12ms</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-600 font-bold tracking-widest uppercase">
                    © 2024 CORE_ADMIN_PROTOCOL // V3.0.4-STABLE
                </div>
            </footer>
        </main>
    )
}
