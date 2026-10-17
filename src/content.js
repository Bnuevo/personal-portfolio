export const profile = {
  name: 'Brian Nuevo',
  email: 'nuevobrian@gmail.com',
  github: 'https://github.com/Bnuevo',
  linkedin: 'https://www.linkedin.com/in/briannuevo/',
  instagram: null,
  resume: 'assets/brian-nuevo-resume.pdf',
};

export const projects = [
  { id: 'brainrot-ai', title: 'BrainRot AI', description: 'Speech to text bot with low stim. videos', url: null },
  { id: 'kaggle-notebooks', title: 'Kaggle Notebooks', description: 'Data Analysis with python ranging from Water Quality to Basketball Analytics', url: null },
  { id: 'kings-database', title: 'Sacramento Kings Database', description: 'Database consisting of the Kings 23’–24’ Game Logs to access crucial stats and lineups', url: null },
];

export const biography = 'Nice to meet you! Obviously I am Brian Nuevo. I am an experienced Software Engineer with an emphasis in Data and Machine Learning. My love for data began thanks to the adoption of the per36min statistic in the NBA. From then on I have become obsessed with "If you challenge conventional wisdom, you will find ways to do things much better than they are currently done". Born and Raised in Sacramento, CA. I am a norcal Native who attended the University of Nevada, Reno and graduated with a B.S. in Information Systems and a minor in Business Analytics. A true weekend warrior on the slopes, links or the local crag if I am not stuck in VS code.';

export const routes = ['home', 'about', 'projects', 'contact'];
export function routeFromHash(hash) {
  const route = hash.replace(/^#\/?/, '').toLowerCase();
  return routes.includes(route) ? route : 'home';
}
export function composeEmail({ name, email, message }) {
  const subject = `Portfolio inquiry from ${name.trim()}`;
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
