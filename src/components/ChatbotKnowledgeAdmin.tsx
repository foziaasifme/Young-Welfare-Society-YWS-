import React, { useState } from 'react';
import { KnowledgeDocument, ChatConversationRecord } from '../types';
import { Bot, RefreshCw, CheckCircle2, Database, FileText, Sparkles, ShieldCheck, Clock, Layers, AlertCircle, MessageSquare } from 'lucide-react';

interface ChatbotKnowledgeAdminProps {
  conversations: ChatConversationRecord[];
  onUpdateConversations: (convs: ChatConversationRecord[]) => void;
}

export const ChatbotKnowledgeAdmin: React.FC<ChatbotKnowledgeAdminProps> = ({
  conversations,
  onUpdateConversations
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('18 Aug 2026, 10:05 AM');
  const [syncStats, setSyncStats] = useState({
    updated: 4,
    added: 1,
    removed: 0,
    errors: 0
  });

  const [documents, setDocuments] = useState<KnowledgeDocument[]>([
    {
      id: 'doc-1',
      sourceType: 'Organization',
      sourceTitle: 'Young Welfare Society Profile & History',
      sourceUrl: '/about',
      contentHash: 'a8f9b2c3d1',
      version: 12,
      lastUpdated: '18 Aug 2026',
      status: 'Published'
    },
    {
      id: 'doc-2',
      sourceType: 'Project',
      sourceTitle: 'Youth Leadership & Vocational Training',
      sourceUrl: '/projects',
      contentHash: 'f4e3d2c1b9',
      version: 8,
      lastUpdated: '17 Aug 2026',
      status: 'Published'
    },
    {
      id: 'doc-3',
      sourceType: 'Activity',
      sourceTitle: 'Dhanot Community Plantation Drive',
      sourceUrl: '/activities',
      contentHash: '7c6b5a4f3e',
      version: 5,
      lastUpdated: '16 Aug 2026',
      status: 'Published'
    },
    {
      id: 'doc-4',
      sourceType: 'FAQ',
      sourceTitle: 'Frequently Asked Questions (YWS Registration & Donations)',
      sourceUrl: '/faq',
      contentHash: '1a2b3c4d5e',
      version: 15,
      lastUpdated: '18 Aug 2026',
      status: 'Published'
    }
  ]);

  const handleSyncNow = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime(new Date().toLocaleString());
      setSyncStats({
        updated: Math.floor(Math.random() * 3) + 2,
        added: 1,
        removed: 0,
        errors: 0
      });
      // increment version on docs
      setDocuments(prev => prev.map(d => ({ ...d, version: d.version + 1, lastUpdated: new Date().toLocaleDateString() })));
    }, 1500);
  };

  const handleToggleStatus = (id: string) => {
    setDocuments(prev => prev.map(d => {
      if (d.id === id) {
        return { ...d, status: d.status === 'Published' ? 'Outdated' : 'Published' };
      }
      return d;
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header & Sync Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
            <Bot className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp AI & RAG Knowledge Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Chatbot CMS Synchronization & Vector Knowledge Base
          </h2>
          <p className="text-emerald-100 text-sm mt-2 max-w-2xl">
            Automatic synchronization ensures that whenever YWS updates website pages, projects, or activities, the WhatsApp assistant immediately acquires the updated knowledge without manual retraining.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shrink-0 w-full md:w-auto text-center">
          <p className="text-xs text-emerald-200 font-medium">Last Automated Synchronization</p>
          <p className="text-sm font-bold text-white mt-1">{lastSyncTime}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/30 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> ✓ Up to Date
            </span>
            <button
              onClick={handleSyncNow}
              disabled={isSyncing}
              className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sync Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Knowledge Documents</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{documents.length}</p>
          <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">Active RAG sources</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Documents Updated</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">+{syncStats.updated}</p>
          <span className="text-xs text-gray-500 font-medium mt-1 inline-block">Latest sync batch</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Active WhatsApp Chats</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{conversations.length}</p>
          <span className="text-xs text-gray-500 font-medium mt-1 inline-block">Managed conversations</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Sync Errors</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{syncStats.errors}</p>
          <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">100% success rate</span>
        </div>
      </div>

      {/* Knowledge Base Documents Table */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-900">Knowledge Base Source Documents</h3>
            <p className="text-xs text-gray-500 mt-0.5">Indexed content powering the WhatsApp AI RAG Assistant</p>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full">
            Single Source of Truth (CMS)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="p-4">Source Type & Title</th>
                <th className="p-4">Source URL / Route</th>
                <th className="p-4">Content Hash</th>
                <th className="p-4">Version</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-4 font-semibold text-gray-900 flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div>{doc.sourceTitle}</div>
                      <span className="text-[10px] text-gray-400 font-normal">{doc.sourceType}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 font-mono text-xs">{doc.sourceUrl}</td>
                  <td className="p-4 font-mono text-xs text-gray-500">{doc.contentHash}</td>
                  <td className="p-4 font-semibold text-emerald-700">v{doc.version}</td>
                  <td className="p-4 text-gray-500">{doc.lastUpdated}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      doc.status === 'Published'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleToggleStatus(doc.id)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {doc.status === 'Published' ? 'Unpublish' : 'Publish'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active WhatsApp Conversations & Handoff Management */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-900">WhatsApp Active Conversations & Support Tickets</h3>
            <p className="text-xs text-gray-500 mt-0.5">Live user inquiries, AI response logs, and human handoff queues</p>
          </div>
          <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
            {conversations.length} Active
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="p-4">Visitor / User</th>
                <th className="p-4">WhatsApp Phone</th>
                <th className="p-4">Status</th>
                <th className="p-4">Messages</th>
                <th className="p-4">Last Interaction</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
              {conversations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400 text-sm">
                    No active WhatsApp conversations recorded in session storage yet. Try opening the chat widget on the website to start a conversation!
                  </td>
                </tr>
              ) : (
                conversations.map((conv) => (
                  <tr key={conv.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      {conv.userName}
                    </td>
                    <td className="p-4 font-mono text-gray-600">{conv.userPhone}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        conv.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {conv.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{conv.messagesCount} msgs</td>
                    <td className="p-4 text-gray-500">{conv.startedAt}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          onUpdateConversations(conversations.map(c => c.id === conv.id ? { ...c, status: 'Resolved' } : c));
                        }}
                        className="text-xs bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        Resolve Ticket
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
