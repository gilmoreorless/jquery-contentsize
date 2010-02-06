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
	$.each(['Width', 'Height'], function (i, name) {
		$.fn['content' + name] = function () {
			var pos = name == 'Width' ? 'left' : 'top';
			if (!this[0]) {
				return null;
			}
			var $this = $(this),
				$children = $this.children(),
				total = 0;
			if (!$children.length) {
				return total;
			}
			$children.each(function () {
				var $child = $(this),
					val = $child.position()[pos] + $child['outer' + name](true);
				if (val > total) {
					total = val;
				}
			});
			return total;
		}
	});
})(jQuery);
