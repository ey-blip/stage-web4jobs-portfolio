/**
 * ==============================================================================
 * PROJET DE STAGE — AYA JEDDI
 * LOGIQUE INTERACTIVE ET COMPORTEMENTS (js/main.js)
 * ==============================================================================
 * Vanilla JavaScript (ES5/ES6 standard sans modules)
 * Compatible ouverture directe via file:// (sans requetes asynchrones locales)
 * Conforme aux normes d'accessibilité WCAG AA
 * ==============================================================================
 */

(function () {
  'use strict';

  // Vérification de la disponibilité du contenu global
  if (!window.CONTENT) {
    console.error("L'objet window.CONTENT n'a pas été détecté. Vérifiez le chargement de js/content.js.");
    return;
  }

  const C = window.CONTENT;

  document.addEventListener('DOMContentLoaded', function () {
    initScrollProgressBar();
    initGlobalNavigation();
    initHeroPathway();
    initStageAccordions();
    initMissionsWorkflow();
    initTimeline();
    initAyaFireTabs();
    initAyaFireChain();
    initOralisJourney();
    initOralisCoursePath();
    initQuizMockup();
    initComparisonToggle();
    initSkillsFilters();
    initBilanCards();
    initScrollReveal();
  });

  /* -------------------------------------------------------------------------- */
  /* 1. BARRE DE PROGRESSION DE DÉFILEMENT & BOUTON RETOUR EN HAUT              */
  /* -------------------------------------------------------------------------- */
  function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }

      if (backToTopBtn) {
        if (scrollTop > 380) {
          backToTopBtn.classList.add('visible');
          backToTopBtn.setAttribute('aria-hidden', 'false');
        } else {
          backToTopBtn.classList.remove('visible');
          backToTopBtn.setAttribute('aria-hidden', 'true');
        }
      }
    }, { passive: true });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 2. NAVIGATION GLOBALE & MENU MOBILE ACCESSIBLE                             */
  /* -------------------------------------------------------------------------- */
  function initGlobalNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section[id]');

    // Menu Mobile
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.contains('open');
        navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', !isOpen);
      });

      // Fermeture sur clic d'un lien
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Fermeture avec la touche Échap
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.focus();
        }
      });
    }

    // ScrollSpy avec IntersectionObserver pour l'indicateur de section active
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + currentId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
              } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(function (sec) {
        observer.observe(sec);
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 3. HERO LEARNING PATHWAY (Objectif → Contenu → Activité → Éval → Feedback) */
  /* -------------------------------------------------------------------------- */
  function initHeroPathway() {
    const nodes = document.querySelectorAll('.pathway-node');
    const detailBox = document.getElementById('pathway-detail-text');

    const pathwayData = {
      objectif: "Objectif pédagogique : Définir avec précision la compétence ou la connaissance visée avant toute scénarisation.",
      contenu: "Contenu d'apprentissage : Structurer les apports conceptuels de manière progressive et modulaire.",
      activite: "Activité formative : Mettre l'apprenant en situation réflexive ou pratique pour ancrer la notion.",
      evaluation: "Évaluation formative : Mesurer la compréhension en continu sans logique punitive.",
      feedback: "Feedback constructif : Expliciter l'erreur et guider l'apprenant vers la maîtrise de la compétence."
    };

    nodes.forEach(function (node) {
      node.addEventListener('click', function () {
        nodes.forEach(function (n) { n.classList.remove('active'); });
        node.classList.add('active');
        const key = node.getAttribute('data-step');
        if (detailBox && pathwayData[key]) {
          detailBox.textContent = pathwayData[key];
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 4. SECTION STAGE : ACCORDÉONS ACCESSIBLES                                  */
  /* -------------------------------------------------------------------------- */
  function initStageAccordions() {
    const cards = document.querySelectorAll('.accordion-card');

    cards.forEach(function (card) {
      const btn = card.querySelector('.accordion-header-btn');
      if (!btn) return;

      btn.addEventListener('click', function () {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        // Ferme les autres pour un comportement accordéon propre
        cards.forEach(function (other) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.accordion-header-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isExpanded) {
          card.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      // Support clavier
      btn.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 5. SECTION MISSIONS : WORKFLOW INTERACTIF EN 6 ÉTAPES                       */
  /* -------------------------------------------------------------------------- */
  function initMissionsWorkflow() {
    const stepCards = document.querySelectorAll('.workflow-step-card');
    const titleEl = document.getElementById('workflow-detail-title');
    const descEl = document.getElementById('workflow-detail-desc');

    stepCards.forEach(function (card, index) {
      card.addEventListener('click', function () {
        stepCards.forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');

        const stepData = C.missions.workflowSteps[index];
        if (stepData && titleEl && descEl) {
          titleEl.textContent = "Étape " + stepData.step + " : " + stepData.name;
          descEl.textContent = stepData.details;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 6. TIMELINE INTERACTIVE DU STAGE                                           */
  /* -------------------------------------------------------------------------- */
  function initTimeline() {
    const buttons = document.querySelectorAll('.timeline-item-btn');
    const nameEl = document.getElementById('timeline-detail-name');
    const dateEl = document.getElementById('timeline-detail-date');
    const summaryEl = document.getElementById('timeline-detail-summary');

    buttons.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const step = C.missions.timeline.steps[index];
        if (step) {
          if (nameEl) nameEl.textContent = step.name;
          if (dateEl) dateEl.textContent = step.date;
          if (summaryEl) summaryEl.textContent = step.summary;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 7. PROJET 1 : ONGLETS ACCESSIBLES AYA FIRE RECOVERY                        */
  /* -------------------------------------------------------------------------- */
  function initAyaFireTabs() {
    const tabBtns = document.querySelectorAll('#aya-tabs .tab-btn');
    const tabPanels = document.querySelectorAll('#aya-tab-panels .tab-panel');

    tabBtns.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        tabBtns.forEach(function (b) {
          b.setAttribute('aria-selected', 'false');
          b.classList.remove('active');
        });
        tabPanels.forEach(function (p) {
          p.hidden = true;
          p.classList.remove('active');
        });

        btn.setAttribute('aria-selected', 'true');
        btn.classList.add('active');
        if (tabPanels[index]) {
          tabPanels[index].hidden = false;
          tabPanels[index].classList.add('active');
        }
      });

      // Navigation accessible au clavier (flèches gauche / droite)
      btn.addEventListener('keydown', function (e) {
        let targetIndex = null;
        if (e.key === 'ArrowRight') {
          targetIndex = (index + 1) % tabBtns.length;
        } else if (e.key === 'ArrowLeft') {
          targetIndex = (index - 1 + tabBtns.length) % tabBtns.length;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          tabBtns[targetIndex].focus();
          tabBtns[targetIndex].click();
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 8. PROJET 1 : CHAÎNE INTERACTIVE (Contenu → Structure → Activité → Éval)   */
  /* -------------------------------------------------------------------------- */
  function initAyaFireChain() {
    const chainBtns = document.querySelectorAll('.chain-btn');
    const titleEl = document.getElementById('chain-detail-title');
    const descEl = document.getElementById('chain-detail-desc');
    const roleEl = document.getElementById('chain-detail-role');

    chainBtns.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        chainBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const step = C.ayaFireRecovery.chain[index];
        if (step) {
          if (titleEl) titleEl.textContent = step.step + ". " + step.name;
          if (descEl) descEl.textContent = step.description;
          if (roleEl) roleEl.textContent = "Focus : " + step.role;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 9. PROJET 2 : PARCOURS APPRENANT ORALIS ACADEMY                            */
  /* -------------------------------------------------------------------------- */
  function initOralisJourney() {
    const journeyNodes = document.querySelectorAll('.journey-step-node');
    const titleEl = document.getElementById('journey-detail-title');
    const descEl = document.getElementById('journey-detail-desc');
    const focusEl = document.getElementById('journey-detail-focus');

    journeyNodes.forEach(function (node, index) {
      node.addEventListener('click', function () {
        journeyNodes.forEach(function (n) { n.classList.remove('active'); });
        node.classList.add('active');

        const item = C.oralisAcademy.learnerJourney[index];
        if (item) {
          if (titleEl) titleEl.textContent = "Étape " + item.step + " : " + item.title;
          if (descEl) descEl.textContent = item.description;
          if (focusEl) focusEl.textContent = "Dimension clé : " + item.focus;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 10. PROJET 2 : CONCEPTION DES COURS ORALIS ACADEMY                         */
  /* -------------------------------------------------------------------------- */
  function initOralisCoursePath() {
    const courseCards = document.querySelectorAll('.course-module-card');
    const detailPanel = document.getElementById('course-module-detail');
    const titleEl = document.getElementById('course-detail-title');
    const subtitleEl = document.getElementById('course-detail-subtitle');
    const detailsEl = document.getElementById('course-detail-content');

    courseCards.forEach(function (card, index) {
      card.addEventListener('click', function () {
        courseCards.forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');

        const course = C.oralisAcademy.coursePath[index];
        if (course) {
          if (detailPanel) detailPanel.hidden = false;
          if (titleEl) titleEl.textContent = course.number + " : " + course.title;
          if (subtitleEl) subtitleEl.textContent = course.subtitle;
          if (detailsEl) {
            detailsEl.innerHTML = '<span class="to-complete">' + course.details + '</span>';
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 11. MOCKUP DE QUIZ FONCTIONNEL AVEC FEEDBACK IMMÉDIAT                      */
  /* -------------------------------------------------------------------------- */
  function initQuizMockup() {
    const optionBtns = document.querySelectorAll('.quiz-option-btn');
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('quiz-feedback-text');
    const resetBtn = document.getElementById('quiz-reset-btn');

    optionBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const feedback = btn.getAttribute('data-feedback');

        // Réinitialiser les états
        optionBtns.forEach(function (b) {
          b.classList.remove('selected-correct', 'selected-wrong');
          b.disabled = true; // Désactiver après sélection
        });

        if (isCorrect) {
          btn.classList.add('selected-correct');
          if (feedbackBox) {
            feedbackBox.className = 'quiz-feedback-box visible correct';
          }
        } else {
          btn.classList.add('selected-wrong');
          if (feedbackBox) {
            feedbackBox.className = 'quiz-feedback-box visible wrong';
          }
        }

        if (feedbackText) {
          feedbackText.textContent = feedback;
        }

        if (resetBtn) {
          resetBtn.hidden = false;
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        optionBtns.forEach(function (b) {
          b.classList.remove('selected-correct', 'selected-wrong');
          b.disabled = false;
        });
        if (feedbackBox) {
          feedbackBox.className = 'quiz-feedback-box';
        }
        resetBtn.hidden = true;
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* 12. COMMUTATEUR CONTENU CLASSIQUE VS INTERACTIF                            */
  /* -------------------------------------------------------------------------- */
  function initComparisonToggle() {
    const btnClassique = document.getElementById('toggle-comp-classique');
    const btnInteractif = document.getElementById('toggle-comp-interactif');
    const panelClassique = document.getElementById('panel-comp-classique');
    const panelInteractif = document.getElementById('panel-comp-interactif');

    if (!btnClassique || !btnInteractif || !panelClassique || !panelInteractif) return;

    btnClassique.addEventListener('click', function () {
      btnClassique.classList.add('active');
      btnInteractif.classList.remove('active');
      panelClassique.classList.add('active-highlight');
      panelInteractif.classList.remove('active-highlight');
    });

    btnInteractif.addEventListener('click', function () {
      btnInteractif.classList.add('active');
      btnClassique.classList.remove('active');
      panelInteractif.classList.add('active-highlight');
      panelClassique.classList.remove('active-highlight');
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 13. FILTRAGE DES COMPÉTENCES DÉVELOPPÉES                                   */
  /* -------------------------------------------------------------------------- */
  function initSkillsFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-item-card');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const cat = btn.getAttribute('data-category');

        skillCards.forEach(function (card) {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 14. CARTES ÉLARGISSABLES DU BILAN                                          */
  /* -------------------------------------------------------------------------- */
  function initBilanCards() {
    const bilanCards = document.querySelectorAll('.bilan-card');

    bilanCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const details = card.querySelector('.bilan-details');
        if (details) {
          const isHidden = details.style.display === 'none';
          details.style.display = isHidden ? 'block' : 'none';
        }
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 15. INTERSECTION OBSERVER POUR ANIMATIONS D'APPARITION AU DÉFILEMENT       */
  /* -------------------------------------------------------------------------- */
  function initScrollReveal() {
    // Si l'utilisateur a activé prefers-reduced-motion, on affiche tout directement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }
  }

})();
