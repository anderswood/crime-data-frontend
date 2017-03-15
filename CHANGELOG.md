# Change Log
All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.0.0] - 2017-03-15
### Added
- Server side rendering for increased user performance and accessibility ([#142](https://github.com/18F/crime-data-explorer/issues/142))
- Add state participation and population downloads ([#475](https://github.com/18F/crime-data-explorer/pull/475))
- Legacy rape definition indicator ([#536](https://github.com/18F/crime-data-explorer/pull/536))
- Google Analytics tracking

### Changed
- New and more prominent beta banner implemented ([crime-data-api#377](https://github.com/18F/crime-data-api/issues/377))
- About page design
- Use first year a state submits NIBRS if since query is earlier in time ([#459](https://github.com/18F/crime-data-explorer/issues/459))
- Increased test coverage for actions, reducers and utility functions ([#480](https://github.com/18F/crime-data-explorer/pull/480))
- Updated human trafficking links, text about NIBRS conversion, caveat about rankings ([#497](https://github.com/18F/crime-data-explorer/pull/497))
- Handle missing data in trend charts ([#514](https://github.com/18F/crime-data-explorer/pull/514))
- Add hover effect to NIBRS donut chart ([#535](https://github.com/18F/crime-data-explorer/pull/535))
- Check `crime` and `place` filter params before using them for API calls ([#566](https://github.com/18F/crime-data-explorer/pull/566), [#567](https://github.com/18F/crime-data-explorer/pull/567))
- Changed breakpoint for beta banner ([#584](https://github.com/18F/crime-data-explorer/pull/584))

### Fixed
- Use specified crime for fetching location_name NIBRS dimension ([crime-data-api#416](https://github.com/18F/crime-data-api/issues/416))
- Removed "United States" from bulk incident download menu ([#433](https://github.com/18F/crime-data-explorer/issues/433))
- Scroll to top of page on any URL change ([#446](https://github.com/18F/crime-data-explorer/issues/446))
- Use proper plural or singular forms where appropriate in NIBRS charts ([#450](https://github.com/18F/crime-data-explorer/issues/450))
- Move mobile sidebar toggle to match designs ([#451](https://github.com/18F/crime-data-explorer/issues/451))
- Apostrophe showing as prime in Explorer ([#499](https://github.com/18F/crime-data-explorer/issues/499))
- External footer links were resulting in 404 errors ([#516](https://github.com/18F/crime-data-explorer/issues/516))
- "Download Data" button for NIBRS demographic cards should trigger three individual CSV downloads ([#538](https://github.com/18F/crime-data-explorer/issues/538))
- Small visualization fixes ([#563](https://github.com/18F/crime-data-explorer/issues/563), [#569](https://github.com/18F/crime-data-explorer/issues/569), [#572](https://github.com/18F/crime-data-explorer/issues/572), [#573](https://github.com/18F/crime-data-explorer/issues/573), [#574](https://github.com/18F/crime-data-explorer/issues/574))

### Removed
- Breadcrumbs removed from Explorer view ([#444](https://github.com/18F/crime-data-explorer/pull/444))
- Pink hover fill on USA map on About page ([#458](https://github.com/18F/crime-data-explorer/issues/458))