"use client";

import { useState, useEffect, useRef } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "",
        headline: "",
        bio: "",
        skills: [],
        resumeUrl: "",
        resumeName: "",
        resumeSize: "",
        lastUpdated: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [newSkill, setNewSkill] = useState({ name: "", level: 90 });
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await fetch('/api/profile');
            const data = await res.json();
            if (data && !data.error) {
                setProfile(data);
            }
        } catch (error) {
            console.error("Failed to fetch profile", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        const formData = new FormData();
        formData.append('name', profile.name);
        formData.append('headline', profile.headline);
        formData.append('bio', profile.bio);
        formData.append('skills', JSON.stringify(profile.skills));
        
        if (resumeFile) {
            formData.append('resume', resumeFile);
        }

        try {
            const res = await fetch('/api/profile', {
                method: 'PUT',
                body: formData
            });
            const data = await res.json();
            if (data && !data.error) {
                setProfile(data);
                setResumeFile(null);
                alert("Profile updated successfully!");
            } else {
                alert("Failed to update profile: " + data.error);
            }
        } catch (error) {
            console.error("Error saving profile", error);
            alert("An error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const addSkill = () => {
        if (newSkill.name) {
            setProfile(prev => ({
                ...prev,
                skills: [...prev.skills, { ...newSkill }]
            }));
            setNewSkill({ name: "", level: 90 });
        }
    };

    const removeSkill = (index) => {
        setProfile(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;

    return (
        <main className="min-h-screen bg-background-dark text-slate-100">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-black/90 backdrop-blur-md">
                <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-black font-bold text-sm">settings</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tighter mono-text uppercase text-white">codeAKstan <span className="text-primary/60 ml-2">{"//"} ROOT_ADMIN</span></h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6 ml-8 border-l border-white/10 pl-8">
                            <a className="text-[11px] font-bold text-primary mono-text tracking-widest uppercase" href="/admin/profile">Profile_Editor</a>
                            <a className="text-[11px] font-bold text-slate-500 hover:text-white transition-colors mono-text tracking-widest uppercase" href="/admin/projects">Project_Manager</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end mr-4">
                            <span className="text-[10px] mono-text text-primary">SESSION_ACTIVE</span>
                        </div>
                        <LogoutButton />
                    </div>
                </div>
            </header>
            <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="mono-text text-primary text-[10px] font-bold tracking-[0.4em] uppercase">System Configuration</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Resume &amp; Profile</h1>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-2.5 bg-primary text-black mono-text text-xs font-bold uppercase tracking-widest hover:brightness-110 cyan-glow transition-all disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save_Changes"}
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">person_edit</span>
                                    01. ABOUT_ME_TEXT
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div className="group">
                                    <label className="block mono-text text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-focus-within:text-primary transition-colors">Display_Name</label>
                                    <input
                                        className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                                    />
                                </div>
                                <div className="group">
                                    <label className="block mono-text text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-focus-within:text-primary transition-colors">Headline_Input</label>
                                    <input 
                                        className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors" 
                                        type="text" 
                                        value={profile.headline}
                                        onChange={(e) => setProfile({...profile, headline: e.target.value})}
                                    />
                                </div>
                                <div className="group">
                                    <label className="block mono-text text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-focus-within:text-primary transition-colors">Biography_Payload</label>
                                    <textarea 
                                        className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none custom-scrollbar" 
                                        rows="8"
                                        value={profile.bio}
                                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">terminal</span>
                                    02. CORE_CAPABILITIES
                                </h3>
                            </div>
                            
                            <div className="mb-4 flex gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Skill Name" 
                                    className="bg-black border border-white/10 rounded px-3 py-2 text-white text-xs font-mono flex-1"
                                    value={newSkill.name}
                                    onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                                />
                                <input 
                                    type="number" 
                                    placeholder="%" 
                                    className="bg-black border border-white/10 rounded px-3 py-2 text-white text-xs font-mono w-16"
                                    value={newSkill.level}
                                    onChange={(e) => setNewSkill({...newSkill, level: parseInt(e.target.value)})}
                                />
                                <button 
                                    onClick={addSkill}
                                    className="text-[10px] text-primary mono-text uppercase font-bold border border-primary/30 px-2 py-1 hover:bg-primary/10 transition-colors"
                                >
                                    + Add
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {profile.skills && profile.skills.map((skill, index) => (
                                    <div key={index} className="p-3 border border-white/5 bg-black rounded flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] mono-text text-slate-500 uppercase">Skill_Node</span>
                                            <span className="text-sm font-mono text-white">{skill.name}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-primary font-bold font-mono">{skill.level}%</span>
                                            <button 
                                                onClick={() => removeSkill(index)}
                                                className="text-slate-600 hover:text-red-500 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">upload_file</span>
                                    03. RESUME_BINARY_UPLOAD
                                </h3>
                            </div>
                            
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept=".pdf" 
                                onChange={handleFileChange} 
                            />
                            
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="flex-1 border-2 border-dashed border-white/10 rounded-xl bg-black/40 flex flex-col items-center justify-center p-12 text-center group hover:border-primary/40 transition-all cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-4xl">picture_as_pdf</span>
                                </div>
                                <p className="mono-text text-sm text-white mb-2 uppercase font-bold tracking-tight">
                                    {resumeFile ? resumeFile.name : "Drop Resume PDF here"}
                                </p>
                                <p className="text-[10px] text-slate-500 mono-text uppercase tracking-widest mb-6">Max_File_Size: 5MB // Extension: .pdf</p>
                                <button className="px-5 py-2 border border-primary/50 text-primary text-[10px] mono-text font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                                    Browse_Local_System
                                </button>
                            </div>

                            {profile.resumeUrl && (
                                <div className="mt-8 pt-8 border-t border-primary/10">
                                    <p className="mono-text text-[10px] text-slate-500 uppercase font-bold mb-4 tracking-widest">Currently_Deployed_Assets</p>
                                    <div className="flex items-center justify-between p-4 bg-black border border-white/10 rounded">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
                                            <div>
                                                <p className="text-xs font-mono text-white">{profile.resumeName || 'Resume.pdf'}</p>
                                                <p className="text-[10px] font-mono text-slate-500">
                                                    Size: {profile.resumeSize || 'Unknown'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">visibility</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest">Last_Sync</span>
                                    <span className="text-[10px] mono-text text-primary">
                                        {profile.lastUpdated ? new Date(profile.lastUpdated).toLocaleString() : 'Never'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest">Public_View_Status</span>
                                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-[9px] mono-text font-bold rounded uppercase">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    )
}
