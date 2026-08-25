import './Tips.css';

export default function Tips() {
  const tips = [
    {
      id: 1,
      category: 'Anxiety',
      title: 'Grounding Techniques for Immediate Relief',
      content: 'When anxiety spikes, try the 5-4-3-2-1 technique. Acknowledge 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This pulls your mind away from anxious thoughts and back into the present moment.'
    },
    {
      id: 2,
      category: 'Stress',
      title: 'The Power of Micro-Breaks',
      content: 'Chronic stress often stems from sustained, uninterrupted focus. Integrate 5-minute micro-breaks every hour. Step away from your screen, stretch, or simply close your eyes and focus on your breath to reset your nervous system.'
    },
    {
      id: 3,
      category: 'Self-Love',
      title: 'Reframing Your Inner Dialogue',
      content: 'Notice how you speak to yourself when you make a mistake. Would you speak to a friend that way? Practice self-compassion by consciously replacing harsh self-criticism with the same understanding you would offer someone you love.'
    },
    {
      id: 4,
      category: 'Mindfulness',
      title: 'Journaling to Detangle Thoughts',
      content: 'Writing down your thoughts can externalize them, making them feel less overwhelming. Spend 10 minutes each morning or evening simply "brain dumping" into your journal without worrying about grammar or structure.'
    }
  ];

  return (
    <div className="container animate-fade-in tips-page">
      <div className="tips-header">
        <h1>Mental Health Insights</h1>
        <p>Evidence-based strategies and practical advice for navigating daily challenges.</p>
      </div>

      <div className="tips-grid">
        {tips.map(tip => (
          <article key={tip.id} className="tip-card">
            <span className="tip-category">{tip.category}</span>
            <h2>{tip.title}</h2>
            <p>{tip.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
