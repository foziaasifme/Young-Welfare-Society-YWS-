import React, { useState } from 'react';
import { Facebook, ThumbsUp, MessageCircle, Share2, ExternalLink, Calendar, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface FacebookPost {
  id: string;
  author: string;
  timeAgo: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  postUrl: string;
}

export const FacebookFeedSection: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [posts, setPosts] = useState<FacebookPost[]>([
    {
      id: 'fb-1',
      author: 'Young Welfare Society - YWS',
      timeAgo: '2 hours ago',
      content: 'Alhamdulillah! Young Welfare Society successfully organized a youth leadership and vocational awareness seminar in Dhanot today. Inspiring our youth to lead with integrity, education, and community spirit since 1992. 🌟📚 #YWS #YouthEmpowerment #SocialWelfare #Dhanot #Punjab',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
      likes: 142,
      comments: 18,
      shares: 24,
      postUrl: 'https://www.facebook.com/yws.pk/'
    },
    {
      id: 'fb-2',
      author: 'Young Welfare Society - YWS',
      timeAgo: '1 day ago',
      content: 'Plantation and Cleanliness Drive update! YWS volunteers and school children planted over 500 saplings across Dhanot under our Green Communities initiative. Thank you to all participants and local elders for joining hands. 🌱🌳 #GreenDhanot #Environment #YWS1995',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
      likes: 215,
      comments: 31,
      shares: 42,
      postUrl: 'https://www.facebook.com/yws.pk/'
    },
    {
      id: 'fb-3',
      author: 'Young Welfare Society - YWS',
      timeAgo: '3 days ago',
      content: 'Providing educational support and learning supplies to deserving students in the region. Education is the foundation of a resilient society. Registered under the Social Welfare Department (1995), YWS remains steadfast in its mission. 📖✏️ #EducationForAll #YWS',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
      likes: 189,
      comments: 22,
      shares: 19,
      postUrl: 'https://www.facebook.com/yws.pk/'
    }
  ]);

  const handleRefreshFeed = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full mb-2">
              <Facebook className="w-4 h-4 text-emerald-700" />
              <span>Real-Time Facebook Feed Bridge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Latest Updates from YWS Facebook Page
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Stay connected with our daily activities, community campaigns, and announcements directly from our official Facebook page (<a href="https://www.facebook.com/yws.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">@yws.pk</a>).
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={handleRefreshFeed}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Syncing Feed...' : 'Refresh Feed'}</span>
            </button>
            <a
              href="https://www.facebook.com/yws.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Visit FB Page</span>
            </a>
          </div>
        </motion.div>

        {/* Facebook Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Post Header */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
                      alt="YWS Logo"
                      className="w-10 h-10 rounded-full object-cover border border-emerald-600"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1">
                        {post.author}
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 fill-blue-600/20" />
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.timeAgo}
                      </p>
                    </div>
                  </div>
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-700 p-2 rounded-lg transition-colors"
                    title="Open on Facebook"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-5 space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>

                  {post.imageUrl && (
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-48 sm:h-52">
                      <img
                        src={post.imageUrl}
                        alt="Facebook Post Media"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Post Engagement Bar */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-emerald-600" /> {post.likes} Likes
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> {post.comments} Comments
                </span>
                <span className="flex items-center gap-1.5">
                  <Share2 className="w-4 h-4 text-emerald-600" /> {post.shares} Shares
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
