;(window.webpackJsonp = window.webpackJsonp || []).push([
	[3],
	{
		174: function(e, a, t) {},
		185: function(e, a, t) {
			'use strict'
			t.r(a),
				t.d(a, 'default', function() {
					return _
				})
			var n,
				r = t(73),
				c = t.n(r),
				i = t(9),
				s = t(0),
				l = t.n(s),
				o = t(76),
				d = t.n(o),
				m = (t(174), t(68)),
				u = t(70),
				p = t(16)
			let w = () => decodeURI(window.location.hash).replace(/^#/, '')
			let _ =
				Object(u.a)(w())(
					(n =
						Object(i.b)(
							({ userReducer: e, articleReducer: a }) => ({
								userReducer: e,
								articleReducer: a
							}),
							{ fetchArticleDetail: p.a }
						)(
							(n = class extends s.Component {
								componentDidMount() {
									this.props.fetchArticleDetail(w())
								}
								render() {
									const e = c.a.get(
											this.props.userReducer,
											'res.data.viewer',
											''
										),
										a = c.a.get(
											this.props.articleReducer,
											'articleDetailHttpResponse',
											''
										)
									return l.a.createElement(
										'div',
										{ className: 'DetailPage' },
										l.a.createElement(m.a, { title: a.title, data: e }),
										l.a.createElement(
											'div',
											{ className: 'DetailPage__content' },
											l.a.createElement(d.a, {
												className: 'markdown-body',
												source: a.body
											})
										)
									)
								}
							})
						) || n)
				) || n
		},
		68: function(e, a, t) {
			'use strict'
			var n = t(0),
				r = t.n(n)
			t(69)
			a.a = function(e) {
				const { data: a, title: t } = e
				return r.a.createElement(
					'div',
					{ className: 'Viewer' },
					r.a.createElement(
						'div',
						{ className: 'Viewer__container' },
						r.a.createElement('h1', { className: 'Viewer__title' }, t),
						r.a.createElement(
							'div',
							{ className: 'Viewer__detail' },
							r.a.createElement('img', {
								className: 'Viewer__image',
								alt: 'avatar',
								src: a.avatarUrl
							}),
							r.a.createElement(
								'span',
								{ className: 'Viewer__detail-list' },
								r.a.createElement(
									'span',
									{ className: 'Viewer__detail-name' },
									a.name
								),
								r.a.createElement(
									'span',
									{ className: 'Viewer__detail-bio' },
									a.bio
								)
							)
						)
					)
				)
			}
		},
		69: function(e, a, t) {},
		70: function(e, a, t) {
			'use strict'
			var n = t(0),
				r = t.n(n)
			a.a = (e) => (a) =>
				class extends a {
					componentDidMount() {
						document.title = e
					}
					render() {
						return r.a.createElement(a, null)
					}
				}
		}
	}
])