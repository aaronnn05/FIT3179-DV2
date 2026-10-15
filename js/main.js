// Embed each Vega-Lite specification in its own container.
// Each chart lives in its own .vg.json file in the js folder.
var charts = [
  ["#vis1", "js/c1_c2_symbol_map_bar_brush.vg.json"],
  ["#vis2", "js/c5_tile_cartogram.vg.json"],
  ["#vis3", "js/c10_histogram_sky_darkness.vg.json"],
  ["#vis4", "js/c3_dot_map.vg.json"],
  ["#vis5", "js/c4_choropleth_map.vg.json"],
  ["#vis6", "js/c11_bar_chart_clubs_per_million.vg.json"],
  ["#vis7", "js/c6_small_multiples_choropleth.vg.json"],
  ["#vis8", "js/c7_line_chart_aurora_searches.vg.json"],
  ["#vis9", "js/c8_heatmap_telescope_searches.vg.json"],
  ["#vis10", "js/c9_slope_chart_search_terms.vg.json"],
  ["#vis11", "js/c12_line_chart_search_terms.vg.json"]
];

// Wait for the web fonts, so Vega measures label widths with the right font.
// SVG renderer keeps charts sharp at any zoom and leaves the text selectable.
document.fonts.ready.then(function () {
  charts.forEach(function (c) {
    vegaEmbed(c[0], c[1], { "actions": false, "renderer": "svg" }).catch(console.error);
  });
});
