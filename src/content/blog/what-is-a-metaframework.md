---
title: "What Is a Metaframework"
description: "Let's put it straight out of the gate."
pubDate: "Apr 10 2026"
published: true
heroImage: "/blog-covers/what-is-a-metaframework.png"
tags: ["nextjs", "nuxt", "sveltekit", "analog", "astro"]
---

Metaframework (_or meta framework, or meta-framework, — you do you_), being a generic therm by its nature, got the real adoption and popularity as a pattern in full-stack web development. It's nobody's surprise as JS and webdev industry is famous for giving birth to a new framework [on a daily basis](https://metaframe.works/tags/newborn/).

## The ABCs

In simple terms, without being your old long-gray-beard CompSci teacher, one can say that _**a metaframework is a framework that is building upon another framework**_.

The concept has most probably come from the [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming) analogy/metaphor. The metaprogramming considers _programs_ (_that is, programming output_) its objects of interest whereas metaframework considers _frameworks_ its objects of interest doing something advanced (_or just additional_) over their functionality.

In this regard in web development, a _framework_ is usually a _UI_ framework (_like [React](https://metaframe.works/tags/react/), [Vue](https://metaframe.works/tags/vue/), [Angular](https://metaframe.works/tags/angular/), or whatnot_) and the added value is usually the **server-side** (_full-stack_) capabilities.

## Ecosystem and diversity

[Next.js](https://metaframe.works/tags/nextjs/) is probably the first bright example that comes to mind when someone mentions web metaframeworks, being one of the best tools of this kind too. Surprisingly, the technologies behind this metaframework are not very common for the ecosystem (_except for JSX, of course_). Other tools use more or less similar patterns(_quite homogenous, gravitating around JSX, [Vite](https://metaframe.works/tags/vite/), and other [VoidZero](https://voidzero.dev)'s tooling, though there is some diversity too_) and extensively borrow innovations of each other, where in many case the most significant difference is the UI web framework underneath. Based on that, the most popular tools are:

1. Next.js (_React on the framework level_)
2. [TanStack Start](https://metaframe.works/tags/tanstack/) (_React_)
3. [Remix](https://metaframe.works/tags/remix/) (_React_)
4. [Waku](https://metaframe.works/tags/waku/) (_React_)
5. [Nuxt](https://metaframe.works/tags/nuxt/) (_Vue_)
6. [Analog](https://metaframe.works/tags/analog/) (_Angular_)
7. [SvelteKit](https://metaframe.works/tags/sveltekit/) (_[Svelte](https://metaframe.works/tags/svelte/)_) — which is, by the way, very suitable name for a metaframework, as in essence, the latter _is_ a kit — a set of tools wrapping a framework to provide extended capabilities and enrich with additional patterns
8. [SolidStart](https://metaframe.works/tags/solidstart/) (_[Solid](https://metaframe.works/tags/solid/)_)
9. [Fresh](https://metaframe.works/tags/fresh/) (_[Preact](<(https://metaframe.works/tags/preact/)>)_)
10. [Astro](https://metaframe.works/tags/astro/) (_React, Vue, Svelte, Solid, custom UI component DSL_)

Hence, while React is obviously the most popular way to build with metaframework, any UI library has its dedicated full-stack support in one form or another and it's largely the matter of personal project and team preferences what to choose. If you wonder about other options and selection criteria you can get to know more in [the Metaframeworks Comparison](https://metaframe.works/comparison/) (_with even meta-meta-frameworks, or metaframeworks of the second level inside if you will — which is definitely some abomination already but people really love Lego, you know_) and in [the Encyclopedia of Metaframeworks](https://github.com/fyodorio/awesome-metaframeworks).

## Building blocks and peculiarities

Looking at the examples above in deeper details one could derive several characteristic building blocks each of metaframeworks has in this form or another — starting from the left (_as in the "shift left" mantra, that is from a developer table_) to the right (_that is closer to the user of the resulting application or website_):

- **Dev environment, build tooling, and other convenience utils.** Each metaframework creator strives to provide the best developer experience — blazing fast builds, comprehensive configuration, handy helper scripts or schematics, and whatnot. Usually you see the word "Rust" at that level a lot, and hopefully have some cool migrations that make your soul rest in peace between tooling updates.
- **Runtime adapters for different platforms and deployment types.** Most of the metaframeworks allow you to deploy the resulting app (_which usually includes both front-end and back-end aspects with all the consequences_) anywhere from classic Node-based Docker containers to server workers and CDNs, depending on your needs and specifics. It has direct impact on your developer environment too and lots of aspects of CI/CD pipelines.
- **Server layer (_API, middleware, server actions_).** Your best friend forever and backend for frontend simultaneously (_BFF_) — the part that makes the application full-stack at first place, serving it with access to external data and guardrails for that, among other important things.
- **Data loading mechanisms and primitives.** This is probably the most versatile part for different tools (_and the favourite station of the hype train_), providing different internal data fetching composables, data loaders, server components (_heard of [RSC](https://metaframe.works/tags/rsc/), huh?_), caching utils, Suspense, and many more.
- **Routing (_file-based, programmatic, or hybrid_) and navigation.** Quite opinionated layer, fluctuating between files and configs, client and server, and building the brittle equilibrium between the different parts of applications and websites.
- **Rendering pipeline (_different modes_).** This is where the metaframeworks shine providing the sacramental flexibility of choosing between Server-Side Rendering (_SSR, well-known from classic Multi-Page Applications — MPAs_), Client-Side Rendering (_CSR, habitual for front-end developers who had build a lot of Single-Page Applications — SPAs_), Static Site Generation (_SSG, the simplest way to build a website without too much of interactivity or without JavaScript at all_), client and server "islands", and everything in between. Usually the merge of all these possibilities is what lets developers fly high and long with the least amount of organisational hassle.
- **UI components and state management.** The framework part, obviously, with UI-framework-specific patterns and approaches, including the corresponding ecosystems of state management tools and utilities.
- **Content and assets.** Useful helpers for working with images, fonts, Markdown files, and other different types of auxiliary data for website and web application building in performant way.

Another important and somewhat metaphorical part of the metaframework construction site is _the tight coupling/glue_ between all the components providing slick permeable boundaries for application data and strong walls for security vulnerabilities simultaneously.

## Pros and cons

## Should you care
