;(window.webpackJsonp = window.webpackJsonp || []).push([
	[8],
	{
		180: function(e, t, n) {},
		181: function(e, t) {},
		187: function(e, t, n) {
			'use strict'
			n.r(t)
			var o = n(0),
				c = n.n(o),
				a = n(9),
				i = (n(180), n(181))
			const r = Object(a.b)((e) => e, function(e, t) {
				return {
					setFilterMode: (t) => {
						e(Object(i.SetFilterMode)(t.toLowerCase()))
					},
					fetchNewsTitle: () => {
						e(Object(i.FetchNewsTitle)())
					},
					toggleDialog: (t) => {
						e(Object(i.ToggleDialog)(t))
					},
					addAgent: (t) => {
						e(Object(i.AddAgent)(t))
					}
				}
			})(
				class extends o.Component {
					render() {
						return c.a.createElement(
							'div',
							{ className: 'ProjectPage-container' },
							'项目列表'
						)
					}
				}
			)
			t.default = r
		}
	}
])