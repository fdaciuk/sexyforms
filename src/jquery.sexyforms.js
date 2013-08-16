/*
Funções utlizadas nesse arquivo:
- init
- initRadio
- initCheckbox
- checkboxChange
- initSelect
- selectChange
- initFile

*/
;(function( window, document, $, undefined ) {

	// Create the defaults once
	var pluginName = 'sexyforms',
	defaults = {
		setStyle: true, // float, margin, position, bottom, left, right, top, height, width
		theme    : 'default' // default, false
	};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {

		/*--------------------------------------------------------------------------------------
		 *
		 * @name: init
		 * @description: Inicia o uso do plugin
		 *
		 *-------------------------------------------------------------------------------------*/
		init : function() {

			var $el = $( this.element ),
				settings = this.settings,
				theme = ! settings.theme ? '' : ' theme-' + settings.theme,

				div_wrap = '<div class="sexyforms' + theme + '" />',

				// Incluir o container ao redor do elemento
				$container_sexyforms = $el.wrap( div_wrap ).closest( 'div.sexyforms' ),

				// Pega informações de posicionamento do elemento
				style = {
					// Float e margin
					float  : $el.css( 'float' ),
					margin : $el.css( 'margin' ),

					// Posicionamento
					position : $el.css( 'position' ) === 'static' ? 'relative' : 'absolute',
					bottom   : $el.css( 'bottom' ),
					left     : $el.css( 'left' ),
					right    : $el.css( 'right' ),
					top      : $el.css( 'top' ),

					// Altura e largura
					height : $el.outerHeight(),
					width  : $el.outerWidth()
				},

				reset_style = {
					left: 0,
					margin: 0,
					position: 'absolute',
					top: 0
				};



			// Definir estilos para o elemento?
			if( settings.setStyle ) {
				$container_sexyforms.css( style ).find( this.element ).css( reset_style );
			}



			// Verificar o tipo do elemento e chamar a função que inicia a personalização
			if( $el.is( 'input:radio' ) ) {
				this.initRadio( $container_sexyforms );
			}

			if( $el.is( 'input:checkbox' ) ) {
				this.initCheckbox( $container_sexyforms );
			}

			if( $el.is( 'select' ) ) {
				this.initSelect( $container_sexyforms );
			}

			if( $el.is( 'file' ) ) {
				this.initFile( $container_sexyforms );
			}

		}, // init










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initRadio
		 * @description: Inicia estilização para radio button
		 *
		 * @param {jQuery Object} $el Objeto jQuery do input radio
		 *
		 *-------------------------------------------------------------------------------------*/
		initRadio : function( $el ) {

			console.log( 'Radio', $el );
			$el.addClass( 'sf-radio' );

		}, // initRadio










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initCheckbox
		 * @description: Inicia estilização para checkbox button
		 *
		 * @param {jQuery Object} $el Objeto jQuery do input checkbox
		 *
		 *-------------------------------------------------------------------------------------*/
		initCheckbox : function( $el ) {

			$el.addClass( 'sf-checkbox' );

			$el.find( 'input' ).on( 'change', this.checkboxChange );

		}, // initCheckbox










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: checkboxChange
		 * @description: Quando o checkbox recebe o evento change
		 *
		 * @param {Object} e Dados do evento change
		 *
		 *-------------------------------------------------------------------------------------*/
		checkboxChange : function( e ) {

			var $this = $( this ),
				$sf_checkbox = $this.closest( 'div.sf-checkbox' ),
				checked = $this.find( 'input' ).is( ':checked' );

			if( checked ) {
				$sf_checkbox.addClass( 'sf-checked' );
			}
			else {
				$sf_checkbox.removeClass( 'sf-checked' );
			}

		}, // checkboxChange










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initSelect
		 * @description: Inicia estilização para select box
		 *
		 * @param {jQuery Object} $el Objeto jQuery do select
		 *
		 *-------------------------------------------------------------------------------------*/
		initSelect : function( $el ) {

			var selected = $el.find( 'option:selected' ).text();
			$el.addClass( 'sf-select' ).append( '<span>' + selected + '</span>' );

			$el.find( 'select' ).on( 'change', this.selectChange );

		}, // initSelect










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: selectChange
		 * @description: Quando o select recebe o evento change
		 *
		 * @param {Object} e Dados do evento change
		 *
		 *-------------------------------------------------------------------------------------*/
		selectChange : function( e ) {

			var $this = $( this ),
				$sf_select = $this.closest( 'div.sf-select' ),
				selected = $this.find( 'option:selected' ).text();

			$sf_select.find( 'span' ).text( selected );

		}, // selectChange










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initFile
		 * @description: Inicia estilização para select box
		 *
		 * @param {jQuery Object} $el Objeto jQuery do select
		 *
		 *-------------------------------------------------------------------------------------*/
		initFile : function( $el ) {

			console.log( 'File', $el );
			$el.addClass( 'sf-file' );

		} // initFile
	};










	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};

})( window, document, jQuery );