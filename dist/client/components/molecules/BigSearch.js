'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BigSearchRecomendation = require('../atoms/BigSearchRecomendation');

var _BigSearchRecomendation2 = _interopRequireDefault(_BigSearchRecomendation);

var _reactRouterDom = require('react-router-dom');

var _apiCaller = require('../../../utils/apiCaller');

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var timer = null;

var Bigsearch = function (_Component) {
    _inherits(Bigsearch, _Component);

    function Bigsearch() {
        _classCallCheck(this, Bigsearch);

        var _this = _possibleConstructorReturn(this, (Bigsearch.__proto__ || Object.getPrototypeOf(Bigsearch)).call(this));

        _this.state = {
            result: [],
            loading: false
        };
        return _this;
    }

    _createClass(Bigsearch, [{
        key: 'handleChangeText',
        value: function handleChangeText(e) {
            var _this2 = this;

            console.log('reset timer...');
            clearTimeout(timer);
            var value = e.target.value;

            this.setState({
                loading: value != ''
            }, function () {
                if (value != '') timer = setTimeout(function () {
                    return _this2.getRecommendation(value);
                }, 600);else _this2.setState({ result: [] });
            });
        }
    }, {
        key: 'getRecommendation',
        value: function getRecommendation(val) {
            var _this3 = this;

            console.log('get recommentaion...');
            this.setState({
                loading: false
            }, function () {
                (0, _apiCaller2.default)('get', '/api/recommendation?keyword=' + val).then(function (result) {
                    _this3.setState({
                        loading: false,
                        result: result
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'nav',
                { className: 'main bigsearch' },
                _react2.default.createElement(
                    'div',
                    { className: 'grid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-3 logo' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/', title: 'Logo Birokrasi Mudah' },
                            _react2.default.createElement('img', { src: '/images/whitelogo.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement('div', { className: 'm-lg' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8_md-12_sm-12' },
                            _react2.default.createElement(
                                'h2',
                                { style: { fontWeight: 300 } },
                                'Saya berada dari Kabupaten/Kota',
                                ' ',
                                _react2.default.createElement(
                                    'select',
                                    { className: 'home-select-white' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        'Bekasi'
                                    )
                                ),
                                _react2.default.createElement('br', null),
                                'dan ingin ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'mengurus...'
                                )
                            ),
                            _react2.default.createElement(
                                'form',
                                { className: 'form-container', method: 'POST', action: 'javascript:;' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-control', style: { position: 'relative' } },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'fa fa-search icon-home-search' },
                                        ' '
                                    ),
                                    _react2.default.createElement('input', {
                                        onChange: function onChange(e) {
                                            return _this4.handleChangeText(e);
                                        },
                                        autoComplete: 'off',
                                        autoCorrect: 'off',
                                        className: 'input-lg input-outline-white input-home-search',
                                        id: 'big-search-input',
                                        type: 'text',
                                        placeholder: 'Apa yang ingin anda urus ?' }),
                                    this.state.loading ? _react2.default.createElement(_BigSearchRecomendation.RecommendationText, { text: 'Melakukan pencarian' }) : null,
                                    !this.state.loading && this.state.result.length == 0 ? _react2.default.createElement(
                                        'small',
                                        null,
                                        'contoh: membuat surat nikah, perpanjang STNK, dll'
                                    ) : null,
                                    !this.state.loading && this.state.result.status ? this.state.result.status == 200 ? _react2.default.createElement(_BigSearchRecomendation2.default, {
                                        data: this.state.result.result
                                    }) : _react2.default.createElement(_BigSearchRecomendation.RecommendationText, { text: 'Hasil pencarian tidak ditemukan' }) : null
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'm-lg' })
                )
            );
        }
    }]);

    return Bigsearch;
}(_react.Component);

exports.default = Bigsearch;


function recommendationTransform(data) {
    var nextdata = [];

    data.map(function (n) {
        nextdata.push({
            logo: n.logo,
            link: '/hasil/' + n.title.replace(/ /g, '-') + '-' + n.id,
            text: n.title
        });
    });

    return nextdata;
}