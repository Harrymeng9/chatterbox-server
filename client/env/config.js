// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  // jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN');
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
// window.CAMPUS = 'FILL_ME_IN';
window.CAMPUS = 'rpp';
