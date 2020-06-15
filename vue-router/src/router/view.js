const home = {
  path: "/",
  name: "Home",
  component: () => import("../views/Home.vue"),
};

const about = {
  path: "/about",
  name: "About",
  component: () => import("../views/About.vue"),
};

const services = {
  path: "/services",
  name: "Services",
  component: () => import("../views/Services.vue"),
};

const skills = {
  path: "/skills",
  name: "Skills",
  component: () => import("../views/Skills.vue"),
};

const education = {
  path: "/education",
  name: "Education",
  component: () => import("../views/Education.vue"),
};

const experience = {
  path: "/experience",
  name: "Experience",
  component: () => import("../views/Experience.vue"),
};

const work = {
  path: "/work",
  name: "Work",
  component: () => import("../views/Work.vue"),
};

const blog = {
  path: "/blog",
  name: "Blog",
  component: () => import("../views/Blog.vue"),
};

const contact = {
  path: "/contact",
  name: "Contact",
  component: () => import("../views/Contact.vue"),
};

export const routes = [
  home,
  about,
  services,
  skills,
  education,
  experience,
  work,
  blog,
  contact,
];
