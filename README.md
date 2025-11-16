# DSJ04: React Podcast App — Search, Sort, Filter & Pagination

## 📌 Overview

This project is a React-based podcast browsing application designed to provide users with a seamless, dynamic, and interactive experience. It allows users to search, sort, filter, and paginate through a list of podcast shows fetched from an external API.

# 🚀 Features

## 🔍 Live Search

- Search podcasts by matching any part of the title.

- Results update dynamically or on form submission.

- Search integrates with current sorting, filtering, and pagination without resetting them.

## ↕️ Sorting

Sort podcasts based on:

- Newest First (by last updated date)

- Title A–Z

- Title Z–A

Sorting works alongside all other UI controls and does not reset existing state.

## 🎧 Genre Filtering

- Filter podcasts by one or more genres.

- Genre titles are mapped using the provided data.js file (API returns only genre IDs).

- Filters remain applied across pages and interactions.

## 📄 Pagination

Display podcasts in manageable chunks.

Support for:

- Page numbers

- Pagination respects all active search, sort, and filter selections.

## ⚙️ State Synchronisation

Clean, centralised state using:

- React State

- Context API

OR a state management library (optional)

All UI controls remain fully in sync at all times.

## 🧹 Clean Code & Documentation

Modular, reusable components.

Consistent formatting and naming.

JSDoc comments for important functions and modules.

## 🛠️ Tech Stack

- React

- JavaScript

- Fetch API

- CSS

## 🌐 API Details

Base URL:
https://podcast-api.netlify.app

Returns an array of podcast previews.

## 📚 How the App Works

1. Fetching Data

Data is fetched once on load using useEffect.

Podcast list is stored in state or context for global access.

2. Applying User Controls

Each time the user interacts with:

- Search

- Sort

- Filter

- Pagination

…the state updates and all components re-render with the correct UI.

3. Keeping State Consistent

No UI control resets another.

Pagination reflects filtered/sorted/searched results.
