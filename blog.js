
(() => {
  "use strict";

  const root = document.querySelector(".sk-blogs");
  if (!root || root.dataset.blogsInitialised === "true") return;

  root.dataset.blogsInitialised = "true";

  const articles = {
    "seo-growth": {
      number: "01",
      category: "SEO STRATEGY",
      time: "8 MIN READ",
      title: "SEO is more than rankings. It's a system for growth.",
      deck: "Organic search becomes more useful when technical health, search intent, content quality and business objectives work together.",
      image: "images/blog-01.jpg",
      imageAlt: "SEO strategy and organic search analytics",
      body: `
        <p>SEO is often reduced to a simple question: what position does a keyword hold on Google? Rankings are useful, but they do not tell the whole story. A page can rank well and attract the wrong audience. Another page can receive impressions but very few clicks. A technically healthy website can still struggle if its content does not answer what people are looking for.</p>

        <p>A stronger approach treats SEO as a connected system. Every activity should have a reason, and every important change should be evaluated against the problem it is meant to solve.</p>

        <h3>01. Start with the searcher's intent</h3>
        <p>Before writing a title or building a landing page, understand the reason behind the search. Someone looking for a definition needs a different experience from someone comparing suppliers or ready to request a quote.</p>
        <p>Review the language people use, the types of pages appearing in search results and the questions a useful page should answer. This helps determine whether the right solution is a guide, category page, product page or service landing page.</p>

        <blockquote>The goal isn't simply to appear in search. It's to be useful when the right person finds you.</blockquote>

        <h3>02. Give technical SEO a clear purpose</h3>
        <p>Crawling, indexing, canonical tags, internal links and page performance help search engines discover and understand a website. But technical work should be prioritised by impact rather than by how impressive a long audit looks.</p>
        <ul>
          <li>Check whether important pages can be crawled and indexed.</li>
          <li>Review canonical signals and internal linking.</li>
          <li>Identify broken pages, redirect problems and duplicate content.</li>
          <li>Prioritise issues affecting valuable templates or important landing pages.</li>
        </ul>
        <p>Not every warning is a critical problem. Understand the affected URLs, the reason behind the warning and whether it is actually preventing a useful page from performing.</p>

        <h3>03. Build content around real demand</h3>
        <p>Keyword research is not just about finding search volume. It helps reveal vocabulary, intent, competition and the questions a page needs to answer. The next step is mapping those findings to the right pages instead of creating multiple pages that compete for the same intent.</p>
        <p>For an ecommerce website, that could mean improving category pages, making product information clearer, connecting related categories through internal links and ensuring product pages answer practical buying questions.</p>

        <h3>04. Measure more than position</h3>
        <p>Google Search Console can help you assess impressions, clicks, click-through rate and average position. Analytics tools can add context about what visitors do after landing on the website. Together, these signals help you ask better questions.</p>
        <ul>
          <li>High impressions but weak CTR: review query intent, titles, descriptions and the search results page.</li>
          <li>Relevant traffic but limited engagement: inspect content usefulness, page experience and the visitor journey.</li>
          <li>Important pages with little visibility: investigate indexing, internal links, content relevance and competition.</li>
        </ul>

        <h3>05. Create a repeatable process</h3>
        <p>Good SEO rarely comes from one isolated edit. Research, implementation, measurement and refinement should form a continuous cycle. Record what changed, when it changed and which metrics can reasonably help evaluate it.</p>
        <div class="sk-article-checklist">
          <h3>A practical SEO checklist</h3>
          <ul>
            <li>Define the page's audience and search intent.</li>
            <li>Check indexing, canonical signals and internal links.</li>
            <li>Make the title, heading and page content genuinely useful.</li>
            <li>Review relevant search queries and performance data.</li>
            <li>Measure changes over an appropriate period.</li>
          </ul>
        </div>
        <h3>The bigger picture</h3>
        <p>SEO is most effective when it connects discovery with a useful experience. Rankings can bring the opportunity, but relevant content, clear information and a sensible next step help turn that opportunity into value.</p>
      `
    },

    "search-console": {
      number: "02",
      category: "SEO / ANALYTICS",
      time: "7 MIN READ",
      title: "Google Search Console: look beyond clicks.",
      deck: "Impressions, CTR, average position and indexing data each answer a different question. The real insight comes from reading them together.",
      image: "images/blog-02.jpg",
      imageAlt: "Search performance report and website metrics",
      body: `
        <p>Google Search Console is one of the most useful tools for understanding how a website appears in Google Search. But opening the Performance report and checking total clicks only tells you part of the story.</p>
        <p>The better approach is to investigate how visibility, click behaviour, query relevance and page performance relate to one another.</p>

        <h3>01. Impressions: are people seeing your pages?</h3>
        <p>An impression generally indicates that a result from your website was shown in Google Search. Growing impressions can suggest that more queries or pages are gaining visibility, but impressions alone do not guarantee qualified traffic.</p>
        <p>Segment the data by page and query. If a category page begins appearing for more relevant searches, that may indicate an opportunity to improve its content or click-through rate. If the queries are unrelated, the page's targeting may need attention.</p>

        <h3>02. Clicks: what attracts visitors?</h3>
        <p>Clicks tell you how many times people selected your search result. Compare clicks with impressions, query relevance and the pages receiving that traffic.</p>
        <p>A page with fewer clicks is not automatically a failure. It may target a smaller, more valuable audience. Equally, a high-click page may not be meeting the needs of the visitors it attracts.</p>

        <h3>03. CTR: is the search result compelling?</h3>
        <p>Click-through rate is the proportion of impressions that result in clicks. A low CTR can be a useful signal, but it needs context. Position, query intent, branded versus non-branded searches, device type and SERP features can all affect the number.</p>
        <p>When a page has substantial impressions but a weaker CTR than expected, inspect the actual queries and search results before rewriting metadata.</p>
        <ul>
          <li>Does the title communicate the page's purpose?</li>
          <li>Does the result match what the searcher appears to want?</li>
          <li>Is the most useful product or service benefit clear?</li>
          <li>Are competing results offering something more relevant?</li>
        </ul>

        <h3>04. Average position: use it carefully</h3>
        <p>Average position is an aggregate metric, not a guarantee that every user sees the page at the same rank. The queries, countries, devices and result types contributing to the average can change.</p>
        <p>Use consistent date ranges and compare similar segments. For a meaningful analysis, examine the queries and pages behind the overall number rather than relying on the site-wide average alone.</p>

        <blockquote>A metric becomes useful when it helps you decide what to investigate next.</blockquote>

        <h3>05. Find opportunities by combining signals</h3>
        <p>Try grouping pages into practical investigation areas:</p>
        <ul>
          <li><strong>High impressions, low CTR:</strong> review query relevance, snippet clarity and competitive results.</li>
          <li><strong>Improving position, limited clicks:</strong> inspect search demand, SERP layout and whether the page targets the right intent.</li>
          <li><strong>Important pages with few impressions:</strong> check indexing, internal links, content relevance and competing pages.</li>
          <li><strong>Clicks increasing without meaningful outcomes:</strong> evaluate landing-page relevance and the next step available to visitors.</li>
        </ul>

        <h3>06. Separate performance analysis from indexing analysis</h3>
        <p>The Performance report helps explain search visibility and click behaviour. The Page Indexing report helps investigate which URLs are indexed and why some are not. These reports serve different purposes.</p>
        <p>For large websites, group URLs by template or category. Investigating a recurring issue affecting an entire page type may be more useful than reviewing thousands of URLs individually.</p>

        <div class="sk-article-checklist">
          <h3>A weekly review routine</h3>
          <ul>
            <li>Compare a consistent period with an appropriate previous period.</li>
            <li>Review changes in clicks and impressions.</li>
            <li>Find relevant high-impression, low-CTR queries.</li>
            <li>Inspect key pages and indexing issues separately.</li>
            <li>Record the next action and revisit the result later.</li>
          </ul>
        </div>
        <p>Search Console is not just a reporting dashboard. Used thoughtfully, it becomes a way to form hypotheses, find opportunities and make better-informed SEO decisions.</p>
      `
    },

    "paid-media": {
      number: "03",
      category: "PAID MEDIA",
      time: "8 MIN READ",
      title: "Paid media is not just about spending more.",
      deck: "A bigger budget cannot compensate for unclear targeting, weak creative or unreliable measurement. Start by fixing the system around the spend.",
      image: "images/blog-03.jpg",
      imageAlt: "Paid advertising campaign planning and performance",
      body: `
        <p>When a paid campaign struggles, increasing the budget can feel like the fastest way to improve results. Sometimes more budget is justified, but only after understanding what the existing campaign is doing and where the friction lies.</p>
        <p>Google Ads and Meta Ads operate differently, yet both benefit from clear objectives, relevant audiences, strong creative and dependable measurement.</p>

        <h3>01. Define what success actually means</h3>
        <p>Before launching, establish the action the campaign is meant to generate. Depending on the business, that might be a qualified enquiry, a completed purchase, a booked consultation or another meaningful conversion.</p>
        <p>Impressions, reach, clicks and engagement can help explain performance, but they should not be mistaken for business outcomes when the actual goal is sales or qualified leads.</p>

        <h3>02. Match the channel to the audience's mindset</h3>
        <p>Search advertising can reach people expressing an active need through their queries. Social advertising can introduce a product or service to people based on audience signals, interests and creative relevance.</p>
        <p>Neither channel is automatically better. The right choice depends on demand, buying behaviour, the offer and how the customer discovers solutions.</p>

        <h3>03. Treat creative as part of the targeting</h3>
        <p>An advertisement communicates who the offer is for and why it matters. The image, video, headline and opening message help the right audience recognise relevance.</p>
        <ul>
          <li>Make the offer easy to understand.</li>
          <li>Show the product or outcome clearly.</li>
          <li>Use a call to action that matches the visitor's stage.</li>
          <li>Test meaningful creative variations instead of changing everything at once.</li>
        </ul>
        <p>For Meta Ads, the creative itself can play a significant role in attracting an audience. For Google Search campaigns, keyword intent, ad relevance and landing-page alignment are especially important.</p>

        <h3>04. Review the full journey</h3>
        <p>A campaign does not end when someone clicks. If the landing page is confusing, slow, inconsistent with the ad or missing a clear next step, paid traffic may struggle to convert.</p>
        <p>Make sure the promise in the advertisement matches the destination page. Keep the main action obvious and remove unnecessary distractions from high-intent journeys.</p>

        <blockquote>Better campaign performance often starts with better diagnosis, not a bigger budget.</blockquote>

        <h3>05. Make measurement trustworthy</h3>
        <p>Conversion tracking should reflect real actions as accurately as possible. Review tracking configuration, duplicated events, attribution settings and the difference between a platform-reported conversion and a genuinely qualified outcome.</p>
        <p>Use UTMs where appropriate to help identify campaign traffic in analytics systems. Agree on naming conventions so that reports remain understandable over time.</p>

        <h3>06. Optimise one meaningful variable at a time</h3>
        <p>When reviewing performance, look for the most plausible bottleneck. It may be search terms, audience quality, creative fatigue, landing-page experience, conversion tracking or the offer itself.</p>
        <p>Write down the hypothesis, make a controlled change where possible, and allow enough time or volume to interpret the result responsibly. Avoid declaring a winner from tiny samples.</p>

        <div class="sk-article-checklist">
          <h3>Before increasing the budget</h3>
          <ul>
            <li>Confirm that conversions are tracked correctly.</li>
            <li>Review audience or search-term quality.</li>
            <li>Check creative and landing-page alignment.</li>
            <li>Evaluate lead or customer quality, not just volume.</li>
            <li>Scale only when the evidence supports it.</li>
          </ul>
        </div>
        <p>Paid media works best as a learning system. Spend creates opportunities to learn, but strategy and measurement determine how useful those lessons become.</p>
      `
    },

    "content-intent": {
      number: "04",
      category: "CONTENT",
      time: "6 MIN READ",
      title: "Make content people actually want to read.",
      deck: "Useful content starts with a real question. The job is to answer it clearly, provide enough context and help the reader take the next step.",
      image: "images/blog-04.jpg",
      imageAlt: "Content planning notes and editorial strategy",
      body: `
        <p>Publishing more pages does not automatically make a website more helpful. Content earns attention when it solves a problem, answers a question or helps someone make a decision.</p>
        <p>That sounds obvious, but it changes how a content project should begin. Instead of starting with a word count or a list of keywords, start by understanding the person who will read the page.</p>

        <h3>01. Find the question behind the keyword</h3>
        <p>A keyword is a useful starting point, but the words alone do not always explain the user's full intent. Look at related searches, common questions, the existing search results and the type of information a reader needs.</p>
        <p>Are they learning a concept, comparing options, evaluating a supplier or preparing to buy? A good content format follows that need rather than forcing every topic into the same template.</p>

        <h3>02. Give the page one clear job</h3>
        <p>Every page should have a primary purpose. A buying guide might help people compare options. A product page should explain the product and its suitability. A category page should help visitors explore a relevant range.</p>
        <p>When one page attempts to answer every possible question, its main message can become difficult to find. Supporting details are useful when they reinforce the primary purpose.</p>

        <h3>03. Make information easy to navigate</h3>
        <p>Readers rarely benefit from a wall of text. Use a clear heading hierarchy, short paragraphs, descriptive subheadings and lists when they genuinely improve understanding.</p>
        <ul>
          <li>Put the central answer near the beginning.</li>
          <li>Use headings that explain what each section covers.</li>
          <li>Define unfamiliar terms when they first appear.</li>
          <li>Use examples to clarify abstract ideas.</li>
          <li>Remove repetition that does not add useful context.</li>
        </ul>

        <h3>04. Add substance, not just length</h3>
        <p>Long content is not inherently better content. The value comes from useful detail, original explanation, accurate information and the ability to address the reader's actual question.</p>
        <p>Where appropriate, include real experience, practical examples, product specifications, decision criteria or a transparent explanation of limitations. Do not invent statistics, testimonials or expertise to make a page appear more authoritative.</p>

        <blockquote>Write for the person trying to solve a problem, not for a content counter.</blockquote>

        <h3>05. Use keywords naturally</h3>
        <p>Search terminology helps readers and search engines understand a page, but repetitive keyword insertion makes content awkward. Use the primary phrase where it naturally clarifies the topic, and include related language when it improves accuracy or coverage.</p>
        <p>Titles and headings should describe the page honestly. A strong headline attracts attention by setting the right expectation, not by promising something the content cannot deliver.</p>

        <h3>06. Make the next step useful</h3>
        <p>After reading, someone may need a related guide, a product category, a comparison or a way to contact the business. Relevant internal links help readers continue without making the article feel like a sales pitch.</p>
        <p>The call to action should fit the reader's intent. A beginner's educational article may benefit from a related resource, while a page for someone comparing services may reasonably offer a consultation or quote.</p>

        <h3>07. Improve content after publication</h3>
        <p>Use search queries, page engagement, customer questions and changes in the subject to identify where a page can improve. Check that facts remain current, links work and the content still fulfils its original purpose.</p>

        <div class="sk-article-checklist">
          <h3>The content quality check</h3>
          <ul>
            <li>Does the page answer a specific audience need?</li>
            <li>Can readers find the main answer quickly?</li>
            <li>Does the content offer useful detail or examples?</li>
            <li>Are its claims accurate and appropriately supported?</li>
            <li>Is the next step relevant rather than forced?</li>
          </ul>
        </div>
        <p>The best content strategy is not simply a publishing schedule. It is a commitment to making useful information easier to find, understand and act on.</p>
      `
    },

    "conversion-thinking": {
      number: "05",
      category: "STRATEGY",
      time: "7 MIN READ",
      title: "From website visits to meaningful action.",
      deck: "A good landing page helps people understand where they are, why the offer matters and what they can do next.",
      image: "images/blog-05.jpg",
      imageAlt: "Website landing page design and conversion planning",
      body: `
        <p>Getting visitors to a website is one challenge. Helping them find what they need and take a useful next step is another.</p>
        <p>A conversion-focused website does not need to pressure every visitor. It needs to communicate clearly, reduce unnecessary uncertainty and make the next action easy to understand.</p>

        <h3>01. Keep the promise consistent</h3>
        <p>When someone clicks an advertisement, search result or social post, they arrive with an expectation. The landing page should quickly confirm that they are in the right place.</p>
        <p>If the headline, offer or visual message changes unexpectedly, visitors may struggle to understand the connection. Carry the main promise from the original message into the page's headline and opening content.</p>

        <h3>02. Explain the value before adding detail</h3>
        <p>A page should communicate what is being offered, who it is for and why someone might care. This is not about writing the biggest possible headline. It is about removing ambiguity.</p>
        <p>Use a clear heading, a concise explanation and supporting details that help the visitor judge relevance. If the offer has important conditions, make them accessible rather than hiding them behind vague claims.</p>

        <h3>03. Design around the next action</h3>
        <p>Different pages require different actions. A product page may encourage an order or enquiry. A service page may invite a consultation. An educational resource may direct readers to another guide.</p>
        <p>Make the primary action visually distinct and describe it in specific language. Avoid filling the first screen with competing buttons that all demand equal attention.</p>

        <h3>04. Reduce avoidable friction</h3>
        <p>Friction includes anything that makes it harder to understand or complete the intended task. It can be confusing navigation, unclear pricing, a lengthy form, missing product information or a layout that is difficult to use on mobile.</p>
        <ul>
          <li>Ask only for information needed at that stage.</li>
          <li>Explain what happens after someone submits a form.</li>
          <li>Make important product or service details easy to locate.</li>
          <li>Ensure buttons, inputs and navigation work on mobile.</li>
          <li>Check loading performance and obvious accessibility barriers.</li>
        </ul>

        <blockquote>Conversion design is often the art of removing unnecessary questions and obstacles.</blockquote>

        <h3>05. Build trust with useful evidence</h3>
        <p>People may hesitate when they cannot evaluate an offer. Depending on the business, relevant evidence could include clear specifications, transparent terms, genuine reviews, a realistic process explanation or examples of previous work.</p>
        <p>Trust signals should be accurate and relevant. Unsupported guarantees and fabricated testimonials can damage credibility rather than improve it.</p>

        <h3>06. Treat mobile as a primary experience</h3>
        <p>Check how the page works at smaller widths. Are the heading and offer visible without awkward clipping? Is the primary button easy to find? Can someone complete the form without excessive zooming or scrolling through unnecessary content?</p>
        <p>Responsive design is more than shrinking a desktop layout. Content order, spacing, controls and the overall reading experience need to work naturally on the device.</p>

        <h3>07. Measure the journey, then test</h3>
        <p>Define the conversion event and check that it is tracked reliably. Review the steps visitors take, where they abandon the process and whether the traffic reaching the page matches its intended audience.</p>
        <p>When testing changes, establish a clear hypothesis. For example, a more specific headline might improve understanding, or a shorter form might reduce abandonment. Change one meaningful element at a time where practical, and avoid drawing strong conclusions from insufficient evidence.</p>

        <div class="sk-article-checklist">
          <h3>Landing page review</h3>
          <ul>
            <li>Is the offer clear within the opening section?</li>
            <li>Does the page match the visitor's original intent?</li>
            <li>Is there one obvious primary action?</li>
            <li>Are trust, details and conditions easy to find?</li>
            <li>Does the complete journey work on mobile?</li>
            <li>Can the intended conversion be measured reliably?</li>
          </ul>
        </div>
        <p>A website should not make visitors work to understand its value. Clear messaging, useful evidence and a well-designed next step create a stronger foundation for meaningful conversions.</p>
      `
    },

    "ai-search": {
      number: "06",
      category: "SEO / THE FUTURE",
      time: "8 MIN READ",
      title: "SEO in the age of AI search: what still matters?",
      deck: "Search experiences are evolving, but discoverability still depends on helping people and search systems understand useful, credible information.",
      image: "images/blog-06.jpg",
      imageAlt: "AI search concepts and digital discovery",
      body: `
        <p>Search is no longer experienced through ten blue links alone. Depending on the query and platform, people may encounter AI-generated summaries, product results, videos, discussions, maps and traditional organic listings.</p>
        <p>These changes affect how people discover information, but they do not make the fundamentals of a useful website irrelevant. They make clarity, relevance and genuine value even more important.</p>

        <h3>01. Build pages that answer real questions</h3>
        <p>Whether someone uses a traditional search result or an AI-assisted experience, useful information remains the foundation. Understand the questions your audience asks and provide direct, well-organised answers supported by relevant detail.</p>
        <p>A page should have a clear subject and purpose. Avoid vague introductions, repetitive filler and content that exists only to repeat keywords without adding meaningful information.</p>

        <h3>02. Make your website easy to understand</h3>
        <p>Clear titles, descriptive headings, sensible internal links and accurate page information help establish what a page covers. Technical accessibility also matters: important content should be available to the systems expected to discover and process it.</p>
        <ul>
          <li>Maintain appropriate crawlability and indexability.</li>
          <li>Use descriptive page titles and headings.</li>
          <li>Keep important information in accessible page content.</li>
          <li>Use structured data where it accurately describes the page and meets relevant guidelines.</li>
          <li>Keep product, business and organisation information consistent.</li>
        </ul>
        <p>Structured data can help communicate information in a standardised format, but it does not guarantee that a page will be cited or displayed in a particular search feature.</p>

        <h3>03. Give people a reason to trust your information</h3>
        <p>Original experience, useful examples, accurate explanations and transparent sourcing can make content more valuable than a generic summary. Demonstrate relevant expertise where it exists and distinguish confirmed facts from opinion.</p>
        <p>Do not publish invented credentials, fabricated case studies or unsupported performance claims simply to make a page look authoritative.</p>

        <blockquote>Don't optimise only to be mentioned. Build something genuinely worth discovering.</blockquote>

        <h3>04. Think beyond a single ranking report</h3>
        <p>Traditional rankings and organic clicks remain useful measurements, but they may not describe every way people discover a brand. Depending on the platform, visibility may include citations, mentions, product appearances or other search features.</p>
        <p>Keep measurement specific. Track what each available tool actually reports, document the platform and query set being reviewed, and avoid treating a small sample of AI answers as a complete picture of visibility.</p>

        <h3>05. Make product and service information precise</h3>
        <p>For ecommerce websites, product information should be consistent, detailed and easy to understand. Titles, descriptions, images, availability, price and other attributes should accurately represent the product.</p>
        <p>For service businesses, explain the service, audience, process and relevant limitations. Specific information helps potential customers assess fit without needing to guess.</p>

        <h3>06. Keep your technical foundations healthy</h3>
        <p>AI-related search features do not remove the need for sound technical SEO. Review indexability, internal linking, page quality, site performance and duplication. Prioritise issues based on the pages affected and their importance rather than assuming every technical warning has the same impact.</p>

        <h3>07. Avoid chasing every new tactic</h3>
        <p>New search features often generate strong opinions and quick optimisation claims. Before adopting a tactic, ask what evidence supports it, whether it improves the visitor's experience and how the result can be measured.</p>
        <p>There is no universal method that guarantees inclusion in every AI-generated answer. Search systems differ, their outputs can change, and eligibility does not mean visibility is assured.</p>

        <div class="sk-article-checklist">
          <h3>A practical AI-search readiness check</h3>
          <ul>
            <li>Can important pages be crawled and indexed appropriately?</li>
            <li>Does each page answer a clear audience need?</li>
            <li>Is the information accurate, original and well organised?</li>
            <li>Are product and business details consistent?</li>
            <li>Are relevant performance and referral signals being monitored?</li>
            <li>Are optimisation decisions based on evidence rather than promises?</li>
          </ul>
        </div>
        <p>The search interface may continue to change. A durable strategy is to make a website technically accessible, factually reliable and genuinely helpful — while measuring visibility across the channels that matter to its audience.</p>
      `
    }
  };

  const cards = [...root.querySelectorAll(".sk-blog-card")];
  const searchInput = root.querySelector("#sk-blog-search");
  const filterButtons = [...root.querySelectorAll(".sk-blog-filter")];
  const resultCount = root.querySelector("#sk-blog-result-count");
  const emptyState = root.querySelector("#sk-blog-empty");
  const resetButton = root.querySelector("#sk-blog-reset");

  const reader = root.querySelector("#sk-article-reader");
  const readerPanel = root.querySelector(".sk-article-reader-panel");
  const readerContent = root.querySelector("#sk-reader-content");
  const readerTitle = root.querySelector("#sk-reader-title");
  const readerDeck = root.querySelector("#sk-reader-deck");
  const readerCategory = root.querySelector("#sk-reader-category");
  const readerTime = root.querySelector("#sk-reader-reading-time");
  const readerImage = root.querySelector("#sk-reader-image");
  const readerBody = root.querySelector("#sk-reader-body");
  const progressBar = root.querySelector("#sk-reader-progress-bar");
  const nextButton = root.querySelector("#sk-reader-next");

  let activeFilter = "all";
  let currentArticleId = null;
  let lastFocusedElement = null;

  const articleOrder = Object.keys(articles);

  function updateCards() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const searchable = `${card.dataset.search || ""} ${card.textContent || ""}`.toLowerCase();

      const categoryMatches = activeFilter === "all" || category === activeFilter;
      const queryMatches = !query || searchable.includes(query);
      const shouldShow = categoryMatches && queryMatches;

      card.hidden = !shouldShow;
      if (shouldShow) visible += 1;
    });

    if (resultCount) {
      resultCount.textContent = `SHOWING ${String(visible).padStart(2, "0")} ${visible === 1 ? "ARTICLE" : "ARTICLES"}`;
    }

    if (emptyState) emptyState.hidden = visible !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";

      filterButtons.forEach((filterButton) => {
        const selected = filterButton === button;
        filterButton.classList.toggle("is-active", selected);
        filterButton.setAttribute("aria-pressed", String(selected));
      });

      updateCards();
    });
  });

  searchInput?.addEventListener("input", updateCards);

  resetButton?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    activeFilter = "all";

    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === "all";
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    updateCards();
    searchInput?.focus();
  });

  function updateReaderProgress() {
    if (!readerPanel || !progressBar) return;

    const scrollable = readerPanel.scrollHeight - readerPanel.clientHeight;
    const progress = scrollable > 0 ? (readerPanel.scrollTop / scrollable) * 100 : 0;

    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  function openArticle(id, trigger) {
    const article = articles[id];
    if (!article || !reader) return;

    currentArticleId = id;
    lastFocusedElement = trigger || document.activeElement;

    readerCategory.textContent = article.category;
    readerTime.textContent = article.time;
    readerTitle.textContent = article.title;
    readerDeck.textContent = article.deck;

    readerImage.src = article.image;
    readerImage.alt = article.imageAlt;
    readerBody.innerHTML = article.body;

    if (readerPanel) readerPanel.scrollTop = 0;
    if (readerContent) readerContent.scrollTop = 0;
    if (progressBar) progressBar.style.width = "0%";

    reader.classList.add("is-open");
    reader.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      reader.querySelector(".sk-reader-close")?.focus();
    });
  }

  function closeArticle() {
    if (!reader || !reader.classList.contains("is-open")) return;

    reader.classList.remove("is-open");
    reader.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  root.querySelectorAll("[data-read-article]").forEach((button) => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.readArticle, button);
    });
  });

  root.querySelectorAll("[data-close-article]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      closeArticle();
    });
  });

  nextButton?.addEventListener("click", () => {
    if (!currentArticleId) return;

    const currentIndex = articleOrder.indexOf(currentArticleId);
    const nextIndex = (currentIndex + 1) % articleOrder.length;
    const nextId = articleOrder[nextIndex];

    openArticle(nextId, nextButton);
  });

  readerPanel?.addEventListener("scroll", updateReaderProgress, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (!reader?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeArticle();
      return;
    }

    if (event.key === "Tab") {
      const focusable = [
        ...reader.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ].filter((element) => element.getClientRects().length > 0);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  updateCards();
})();
