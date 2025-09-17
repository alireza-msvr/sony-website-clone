"use strict";
const translations = {
  en: {
    "intro-title": "Design",
    "intro-menu": "Menu",
    "intro-heading": "Create new values through the power of design.",
    "intro-paragraph":
      "Through the power of design, we envision new paradigms, give meaning to ideas, and engage globally — a process that resonates with a diversity of values, bringing new standards into being. As we continue to explore the limitless possibilities of design, we will work to create new value standards with people across the globe.",
    "whats-new": "What's New",
    "about-title": "About",
    "stories-header": "Stories",
    "more-stories-header": "More from Sony design",
    "view-all-1": "View All >",
    "view-all-2": "View All",
    "view-all-3": "View All",
    "view-all-4": "View All >",
    "view-all-5": "View All >",
    "interviews-title": "Interviews & Lectures",
    "interviews-subtitle": "Learning from various experts",
    "gallery-title": "Gallery",
    "gallery-subtitle": "The history of art",
    "related-title": "Related Information",
  },
  ja: {
    "intro-title": "デザイン",
    "intro-menu": "メニュー",
    "intro-heading": "デザインの力で新しい価値を創造する。",
    "intro-paragraph":
      "デザインの力を通じて、新しいパラダイムを構想し、アイデアに意味を与え、世界とつながります。このプロセスは多様な価値観に共鳴し、新しい基準を生み出します。デザインの無限の可能性を探求し続け、世界中の人々と共に新しい価値基準を築いていきます。",
    "whats-new": "最新情報",
    "about-title": "概要",
    "stories-header": "ストーリー",
    "more-stories-header": "ソニー・デザインからもっと",
    "view-all-1": "すべて見る >",
    "view-all-2": "すべて見る",
    "view-all-3": "すべて見る",
    "view-all-4": "すべて見る >",
    "interviews-title": "インタビューと講義",
    "interviews-subtitle": "さまざまな専門家から学ぶ",
    "gallery-title": "ギャラリー",
    "gallery-subtitle": "芸術の歴史",
    "related-title": "関連情報",
  },
};

function setLang(lang) {
  for (const key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName.toLowerCase() === "button") {
        el.innerHTML = translations[lang][key]; 
      } else {
        el.textContent = translations[lang][key];
      }
    }
  }
  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("preferredLang") || "en";
  setLang(saved);
});
