import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Note: This single-file mockup assumes TailwindCSS, Framer Motion, lucide-react and shadcn/ui are available.
// It is a high-fidelity visual mockup & interactive playground (no real backend).

export default function BiteQuestApp() {
  const [showLogModal, setShowLogModal] = useState(false);
  const [foodLogs, setFoodLogs] = useState(sampleLogs());
  const [selectedMapRegion, setSelectedMapRegion] = useState("Home Valley");
  const [xp, setXp] = useState(1280);
  const [level, setLevel] = useState(calcLevel(1280));
  const [activeBoss, setActiveBoss] = useState(sampleBoss());
  const [achievements, setAchievements] = useState(sampleAchievements());

  useEffect(() => {
    setLevel(calcLevel(xp));
  }, [xp]);

  function addFoodLog(log) {
    setFoodLogs((s) => [log, ...s]);
    setXp((x) => x + log.xp);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-amber-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* LEFT: Dashboard */}
        <div className="col-span-8">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">BiteQuest</h1>
              <p className="text-sm text-slate-600">Turn your meals into an adventure</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-slate-500">XP</div>
                <div className="text-lg font-semibold">{xp} • Level {level}</div>
              </div>
              <button
                onClick={() => setShowLogModal(true)}
                className="rounded-2xl px-4 py-2 bg-amber-500 text-white shadow hover:scale-105 transform"
              >
                + Log Meal
              </button>
            </div>
          </header>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-white rounded-2xl shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Daily Summary</h2>
                <p className="text-sm text-slate-500">Calories, macros, and mood in one glance</p>
              </div>
              <div className="text-right">
                <div className="text-sm">Calories</div>
                <div className="text-2xl font-bold">1,850 kcal</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-5">
              <StatCard title="Protein" value="92 g" sub="60% of goal" />
              <StatCard title="Carbs" value="210 g" sub="80% of goal" />
              <StatCard title="Fat" value="62 g" sub="50% of goal" />
            </div>
          </motion.div>

          {/* Food Feed */}
          <div className="space-y-4">
            <section className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-3">Recent Meals</h3>
              <div className="divide-y">
                {foodLogs.map((f, i) => (
                  <div key={i} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center font-semibold">{f.emoji}</div>
                      <div>
                        <div className="font-medium">{f.title}</div>
                        <div className="text-xs text-slate-500">{f.calories} kcal • {f.mood}</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">{f.time}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Boss Card */}
            <BossCard boss={activeBoss} onDefeat={() => {
              setXp((x) => x + activeBoss.rewardXp);
              setActiveBoss(sampleBoss());
            }} />

            {/* Achievements */}
            <section className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-3">Achievements</h3>
              <div className="flex gap-3 overflow-x-auto py-2">
                {achievements.map((a, idx) => (
                  <div key={idx} className="min-w-[160px] bg-amber-50 rounded-lg p-3 border">
                    <div className="text-2xl">{a.icon}</div>
                    <div className="font-semibold mt-2">{a.title}</div>
                    <div className="text-xs text-slate-500">{a.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT: Map + Social */}
        <aside className="col-span-4">
          <div className="sticky top-6 space-y-4">
            {/* Flavor Map */}
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold">Flavor World Map</h3>
              <p className="text-xs text-slate-500">Explore regions by the meals you've logged</p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {['Home Valley', 'Tokyo Bay', 'Spicy Desert', 'Herb Grove'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedMapRegion(r)}
                    className={`p-3 rounded-lg text-left border ${selectedMapRegion === r ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:bg-slate-50'}`}>
                    <div className="font-semibold">{r}</div>
                    <div className="text-xs text-slate-500">{Math.floor(Math.random()*100)}% discovered</div>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-xs text-slate-500">Selected region</div>
                <div className="font-medium">{selectedMapRegion}</div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold">Friends Leaderboard</h3>
              <ol className="mt-3 space-y-2">
                {sampleLeaderboard().map((p, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">{p.initials}</div>
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        <div className="text-xs text-slate-500">{p.tag}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">{p.xp} XP</div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-4 shadow flex flex-col gap-3">
              <button className="rounded-lg p-3 border hover:scale-102 transform">Camera Recognize (AI)</button>
              <button className="rounded-lg p-3 border">Voice Log: “I ate a salad”</button>
              <button className="rounded-lg p-3 border">Meal Planner (AI)</button>
            </div>
          </div>
        </aside>
      </div>

      {/* Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-2xl bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Quick Log</h2>
              <button className="text-slate-500" onClick={() => setShowLogModal(false)}>Close</button>
            </div>

            <MealLogForm onSubmit={(log) => { addFoodLog(log); setShowLogModal(false); }} />
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* ---------------------- Reusable small components --------------------- */
function StatCard({ title, value, sub }) {
  return (
    <div className="bg-amber-50 rounded-lg p-3">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="font-semibold text-lg">{value}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  );
}

function BossCard({ boss, onDefeat }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex items-center justify-between">
      <div>
        <div className="text-xs text-amber-500 font-semibold">Weekly Challenge</div>
        <div className="font-semibold text-lg mt-1">{boss.name}</div>
        <div className="text-xs text-slate-500 mt-2">{boss.desc}</div>
      </div>
      <div className="text-right">
        <div className="text-sm">Reward</div>
        <div className="font-bold text-lg">{boss.rewardXp} XP</div>
        <button onClick={onDefeat} className="mt-3 rounded-lg px-3 py-2 bg-amber-500 text-white">Confront</button>
      </div>
    </div>
  );
}

function MealLogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState(420);
  const [mood, setMood] = useState("Good");

  function handleSubmit(e) {
    e.preventDefault();
    const log = {
      title: title || 'Mystery Meal',
      calories,
      mood,
      time: new Date().toLocaleTimeString(),
      emoji: pickEmoji(title),
      xp: Math.floor(calories / 20) + (mood === 'Great' ? 10 : 0),
    };
    onSubmit(log);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-sm">Meal name</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 rounded-md border mt-1" placeholder="e.g., Avocado Toast" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm">Calories</label>
          <input type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="w-full p-2 rounded-md border mt-1" />
        </div>
        <div>
          <label className="text-sm">Mood / Energy</label>
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full p-2 rounded-md border mt-1">
            <option>Great</option>
            <option>Good</option>
            <option>Neutral</option>
            <option>Tired</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button type="button" className="px-4 py-2 rounded-lg border" onClick={() => { setTitle('Veggie Bowl'); setCalories(520); setMood('Great'); }}>Quick Fill</button>
        <button type="submit" className="px-4 py-2 rounded-lg bg-amber-500 text-white">Save</button>
      </div>
    </form>
  );
}

/* ---------------------- Sample data & helpers --------------------- */
function sampleLogs() {
  return [
    { title: 'Greek Salad', calories: 420, mood: 'Great', time: '8:13 AM', emoji: '🥗', xp: 31 },
    { title: 'Cold Brew', calories: 5, mood: 'Good', time: '10:02 AM', emoji: '☕', xp: 5 },
    { title: 'Sushi Bento', calories: 640, mood: 'Good', time: '12:45 PM', emoji: '🍣', xp: 42 },
  ];
}

function sampleBoss() {
  const bosses = [
    { name: 'Sugar Sorcerer', desc: 'Reduce added sugar for 3 days', rewardXp: 150 },
    { name: 'Salt Titan', desc: 'Lower sodium intake by 20%', rewardXp: 120 },
    { name: 'Fiber Warden', desc: 'Add 10g fiber daily for 5 days', rewardXp: 160 },
  ];
  return bosses[Math.floor(Math.random() * bosses.length)];
}

function sampleAchievements() {
  return [
    { title: '7 Days Veggie', desc: 'Veggies logged 7 days', icon: '🥦' },
    { title: 'Streak Master', desc: '14-day logging streak', icon: '🔥' },
    { title: 'Explorer', desc: 'Visited 5 regions', icon: '🗺️' },
  ];
}

function sampleLeaderboard() {
  return [
    { name: 'Asha', initials: 'AS', xp: 3400, tag: 'Protein Pro' },
    { name: 'Miguel', initials: 'MG', xp: 2920, tag: 'Meal Maestro' },
    { name: 'You', initials: 'YT', xp: 1280, tag: 'Rookie' },
  ];
}

function calcLevel(xp) {
  // simple level formula
  return Math.floor(Math.sqrt(xp / 50)) + 1;
}

function pickEmoji(title) {
  if (!title) return '🍽️';
  const t = title.toLowerCase();
  if (t.includes('salad')) return '🥗';
  if (t.includes('coffee') || t.includes('brew')) return '☕';
  if (t.includes('sushi')) return '🍣';
  if (t.includes('toast') || t.includes('avocado')) return '🥑';
  return '🍽️';
}
