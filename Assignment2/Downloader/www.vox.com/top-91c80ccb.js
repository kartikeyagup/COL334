var Vox=Vox||{};Vox.EditorialApps=Vox.EditorialApps||{},Vox.EditorialApps.AdHelpers=Vox.EditorialApps.AdHelpers||{},Vox.EditorialApps.AdHelpers.AdUnitIds={VergeFishTank:463318},Vox.EditorialApps.AdHelpers.Events={AdResponseWithHTML:"Vox.Ad.ResponseWithHTML",AdRequest:"Hymnal.requestAd"},Vox.EditorialApps.Ads=function(){var t="lrjhazrpqbgtnrij",i="verge";return{setup:function(){var e=window.SBN||{};if("undefined"!=typeof OX){e.OpenX=new OXH,e.OpenX.setAdUnitScopes(),e.OpenX.setAdUnitGroups(),"object"==typeof Util&&Util.UserAgentProfiler&&e.OpenX.setPageScope({browser_width:Util.UserAgentProfiler.browserWidthForOpenX(),device_type:Util.UserAgentProfiler.deviceTypeForOpenX()}),e.OpenX.addVariable("network",i);var n=[];if("object"==typeof Vox.EditorialApps.AdHelpers.AdUnitIds)for(var s in Vox.EditorialApps.AdHelpers.AdUnitIds)n.push(Vox.EditorialApps.AdHelpers.AdUnitIds[s]);e.OpenX.setAdUnitsOnPage(n),e.OpenX.fetchAds()}else console&&console.log&&console.log("Warning: OpenX did not load! Trying to fail gracefully."),e.OpenX={},e.OpenX.showAd=function(t){console&&console.log&&console.log("OpenX did not load so we cannot render ad "+t+".")};return window.SBN=e,window._umbel=window._umbel||[],function(){var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=document.location.protocol+"//tags.api.umbel.com/"+t+"/w.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(i,e);var n=new Date;n.setDate(n.getDate()+365),document.cookie="umbel_api_key="+t+"; expires="+n.toUTCString()}(),{after:function(t){"function"==typeof t&&t()}}},show:function(t){window.SBN.OpenX.showAd(t)},render:function(t){this.show(t)}}}();var OXH=function(t){this._ox=t&&t.ox,this._ox||(this._ox=OX()),this._contentTopics={},this._customVariables={},this._adUnitsToShow=null,this._pageScope=null,this._adUnitScopes=null,this._adUnitGroups=null,this._debugging=!1,this._fetchDisabled=!1,this.log_to_console=function(t){"undefined"!=typeof SBN&&SBN.Campaigns&&SBN.Campaigns.log(t)},this.disableFetch=function(){this._fetchDisabled=!0},this.addContentTopic=function(t,i){this._contentTopics[t]=i,this._ox.addContentTopic(t)},this.addVariable=function(t,i){this._customVariables[t]=i,this._ox.addVariable(t,i)},this.removeVariable=function(t){delete this._customVariables[t],this._ox.addVariable(t,null)},this.contentTopics=function(){return this._contentTopics},this.customVariables=function(){return this._customVariables},this.setAdUnitScopes=function(t){this._adUnitScopes=t},this.setAdUnitGroups=function(t){this._adUnitGroups=t},this.setPageScope=function(t){this._pageScope=t;for(var i in t)this.addVariable(i,t[i])},this.getPageScope=function(t){return null===this._pageScope?null:this._pageScope[t]},this.setAdUnitsOnPage=function(t){this._adUnitsOnPage=t},this.addAdUnitToPage=function(t){for(var i=this._adUnitsOnPage.concat(t),e=[],n=0;n<i.length;n++){var s=i[n];-1===e.indexOf(s)&&e.push(s)}this._adUnitsOnPage=e},this.isAdUnitInScope=function(t){if(!this.isUsingScope())return!0;var i=this._adUnitScopes[t];if(!i)return!0;for(var e in this._pageScope)if(this._pageScope.hasOwnProperty(e)){var n=this._pageScope[e],s=i[e];if(s&&!this.arrayInclude(s,n)){var o="Ad unit "+t+' skipped for scope "'+n+'". Available values are: '+s.join(", ")+".";return this.log_to_console(o),jQuery("#openx_info_ad_units_skipped").append(" "+t),!1}}return!0},this.isUsingScope=function(){return null!==this._pageScope&&null!==this._adUnitScopes},this.getActiveAdUnits=function(){var t=[];if("undefined"!=typeof this._adUnitsOnPage){for(var i=0;i<this._adUnitsOnPage.length;++i){var e=this._adUnitsOnPage[i];this.isAdUnitInScope(e)&&t.push(e)}return t}},this.showAd=function(t){this._adUnitsToShow&&this.arrayInclude(this._adUnitsToShow,t)&&this._ox.showAdUnit(t)},this.addGroups=function(t){for(var i=0;i<t.length;++i)this._ox.addPage(t[i])},this.addUnits=function(t){for(var i=0;i<t.length;++i)this._ox.addAdUnit(t[i])},this.fetchAds=function(){var t=this.getActiveAdUnits(),i=t.slice(0),e=[];for(var n in this._adUnitGroups){var s=this._adUnitGroups[n],o=this.arraySubtract(s,i);0===o.length&&(e.push(n),i=this.arraySubtract(i,s))}this.addGroups(e),this.addUnits(i),this._fetchDisabled||(this._ox.fetchAds(),this._adUnitsToShow=t)},this.arraySubtract=function(t,i){for(var e=[],n=0;n<t.length;++n){for(var s=!1,o=0;o<i.length;++o)if(t[n]===i[o]){s=!0;break}s||e.push(t[n])}return e},this.arrayIntersection=function(t,i){for(var e=[],n=0;n<t.length;++n)for(var s=0;s<i.length;++s)if(t[n]===i[s]&&!this.arrayInclude(e,t[n])){e.push(t[n]);break}return e},this.arrayIndexOf=function(t,i){for(var e=0,n=t.length;n>e;e++)if(t[e]===i)return e;return-1},this.arrayInclude=function(t,i){return-1!==this.arrayIndexOf(t,i)}},VOX=VOX||{},_gaq=_gaq||[];void 0!=window._&&(_.templateSettings={interpolate:/\{\{\=(.+?)\}\}/g,evaluate:/\{\{(.+?)\}\}/g});