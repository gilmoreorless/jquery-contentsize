/*!
 * jQuery contentSize plug-in v0.1
 * Get the total width/height of an element's children
 *
 * @requires jQuery v1.2 or later
 *
 * Copyright (c) 2009 Gilmore Davidson
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($){
	$.each(['Width', 'Height', 'Size'], function (i, name) {
		$.fn['content' + name] = function (quick) {
			if (!this[0]) {
				return null;
			}
			var $this = this.eq(0),
				position = $this.css('position'),
				keepPosition = /absolute|relative/.test(position),
				filter = quick === true ? ':last' : undefined,
				pos = name === 'Width' ? 'left' : 'top',
				isBoth = name === 'Size',
				total = isBoth ? {width: 0, height: 0} : 0,
				$children = $this.children(filter);

			// If there are no children, then there's no point trying to get their size
			if (!$children.length) {
				return total;
			}

			// Make sure the container has position:absolute or relative, so that .position() works
			if (!keepPosition) {
				$this.css('position', 'relative');
			}

			// Get the size of the specified children
			$children.each(function () {
				var $child = $(this), val;
				if (isBoth) {
					var childPos = $child.position();
					val = childPos.left + $child.outerWidth(true);
					if (val > total.width) {
						total.width = val;
					}
					val = childPos.top + $child.outerHeight(true);
					if (val > total.height) {
						total.height = val;
					}
				} else {
					val = $child.position()[pos] + $child['outer' + name](true);
					if (val > total) {
						total = val;
					}
				}
			});

			// Restore the container's old css position if needed
			if (!keepPosition) {
				$this.css('position', position);
			}
			
			return total;
		}
	});
})(jQuery);
