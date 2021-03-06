var _source = null;

const SSE = function(onUpdate) { this.onUpdate = onUpdate; }

SSE.prototype.listenTo = function(endpoint){
  console.log('[SSE] Listening to ', endpoint);
  if (_source) { _source.close(); }
  _source = new EventSource(endpoint);
  _source.addEventListener('message', message => {
    var payload = JSON.parse(message.data);
    console.log('[SSE] Received update with ', payload);
    this.onUpdate(payload);
  });
}

export default SSE;

// // Listen to eventsource
// // Triggers updatePlaylist actions
// (function(API, global) {
//
//   var _timeout = null;
//   var _callback = null;
//
//   global.Notifications = {
//     setup: function(opts){
//       console.log('[NOTIFICATIONS] Starting with options', opts) ;
//       _callback = opts.onUpdate;
//       _timeoutDelay = opts.refreshDelay;
//
//       var source = new EventSource(opts.source);
//       var self = this;
//       source.addEventListener('message', function(message){
//         var payload = JSON.parse(message.data);
//         console.log('[NOTIFICATIONS] Received update with payload', payload);
//         _callback(payload);
//         self.resetTimeout();
//       });
//     },
//
//     refresh: function(){
//       console.log('[NOTIFICATIONS] Refreshing the playlist');
//       var self = this;
//       API.refresh()
//           .then(function(payload){
//             _callback(payload);
//             self.resetTimeout();
//           })
//           .fail(function(err){
//             global.location.reload();
//           });
//     },
//
//     resetTimeout: function(){
//       console.log('[NOTIFICATIONS] Resetting timeout');
//       clearTimeout(_timeout);
//       _timeout = setTimeout(this.refresh.bind(this), _timeoutDelay);
//     }
//   };
//
//
// })(window.PD.API, window.PD);
