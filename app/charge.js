		$(document).ready(function() {
			var $level = $('#battery-level');

			var updateStatus = function(status, error) {
				if(error) {
					$('#not-supported').show();
					return;
				}

				var level = Math.floor(status.level * 100);
				$level.toggleClass('charging', !!status.charging);
				$level.toggleClass('plugged', status.dischargingTime === Infinity);
				$level.css({'width': level + '%'});
				$level.toggleClass('low', level <= 20);
			};

			Battery.getStatus(updateStatus);
			Battery.onUpdate(updateStatus);
		});
