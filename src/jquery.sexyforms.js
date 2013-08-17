/*
Funções nesse arquivo
- init
- initRadio
- radioChange
- initCheckbox
- checkboxChange
- initSelect
- selectChange
- initFile
- fileChange


Opções do plugin
- setStyle
- theme
- wrap
*/

;(function( window, document, $, undefined ) {

	// Create the defaults once
	var pluginName = 'sexyforms',
	defaults = {
		setStyle : true, // float, margin, position, bottom, left, right, top, height, width
		theme    : 'default', // default, false,
		wrap     : 'div' // Elemento html que vai envolver os itens de formulário
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

				// Usar algum tema?
				theme = ! settings.theme ? '' : ' sf-theme-' + settings.theme,

				container_wrap = '<' + settings.wrap + ' class="sexyforms' + theme + '" />',

				// Incluir o container ao redor do elemento
				$container_sexyforms = $el.wrap( container_wrap ).closest( '.sexyforms' ),

				// Pega informações de posicionamento do elemento
				style = {
					// Float e margin
					float  : $el.css( 'float' ),
					margin : $el.css( 'margin' ),

					// Posicionamento
					position : 'static' === $el.css( 'position' ) ? 'relative' : $el.css( 'position' ),
					bottom   : $el.css( 'bottom' ),
					display  : $el.css( 'display' ),
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
				},

				// Função que será executada dependendo do elemento
				functionExec;



			// Definir estilos para o elemento?
			if( settings.setStyle ) {
				$container_sexyforms.css( style ).find( this.element ).css( reset_style );
			}



			// Verificar o tipo do elemento, chamar a função que inicia a personalização
			// e os eventos para cada elemento
			if( $el.is( 'input:radio' ) ) {
				this.initRadio( $container_sexyforms );
				functionExec = this.radioChange;
			}

			if( $el.is( 'input:checkbox' ) ) {
				this.initCheckbox( $container_sexyforms );
				functionExec = this.checkboxChange;
			}

			if( $el.is( 'select' ) ) {
				this.initSelect( $container_sexyforms );
				functionExec = this.selectChange;
			}

			if( $el.is( 'input:file' ) ) {
				this.initFile( $container_sexyforms );
				functionExec = this.fileChange;
			}


			// Evento change
			$el.on( 'change', functionExec );

		}, // init










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initRadio
		 * @description: Inicia estilização para radio button
		 *
		 * @param {jQuery Object} $ctn Objeto jQuery do container do input radio
		 *
		 *-------------------------------------------------------------------------------------*/
		initRadio : function( $ctn ) {

			var checked = $ctn.find( 'input' ).is( ':checked' );
			$ctn.addClass( 'sf-radio' );

			// Se o radio estiver checkado, trazer ele checado no carregamento
			if( checked ) {
				$ctn.addClass( 'sf-checked' );
			}

		}, // initRadio










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: radioChange
		 * @description: Quando o radio recebe o evento change
		 *
		 * @param {Object} e Dados do evento change
		 *
		 *-------------------------------------------------------------------------------------*/
		radioChange : function( e ) {

			e.preventDefault();

			var $this = $( this ),
				this_id = $this[0].id,
				radio_name = $this[0].name;

			$( 'input[name="' + radio_name + '"]' ) // Todos os radio
				.not( '#' + this_id ) // Menos o clicado
				.closest( '.sf-radio' ) // Volta até ao container
				.removeClass( 'sf-checked' ); // e remove a classe sf-checked

			// Inclui a classe sf-checked no container do radio clicado
			$this.closest( '.sf-radio' ).addClass( 'sf-checked' );

		}, // radioChange










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initCheckbox
		 * @description: Inicia estilização para checkbox button
		 *
		 * @param {jQuery Object} $ctn Objeto jQuery do container do input checkbox
		 *
		 *-------------------------------------------------------------------------------------*/
		initCheckbox : function( $ctn ) {

			var checked = $ctn.find( 'input' ).is( ':checked' );
			$ctn.addClass( 'sf-checkbox' );

			// Se o checkbox estiver checkado, trazer ele checado no carregamento
			if( checked ) {
				$ctn.addClass( 'sf-checked' );
			}

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

			e.preventDefault();

			var $this = $( this ),
				$sf_checkbox = $this.closest( '.sf-checkbox' ),
				checked = $this.is( ':checked' );

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
		 * @param {jQuery Object} $ctn Objeto jQuery do container do select
		 *
		 *-------------------------------------------------------------------------------------*/
		initSelect : function( $ctn ) {

			var selected = $ctn.find( 'option:selected' ).text();
			$ctn.addClass( 'sf-select' ).append( '<span>' + selected + '</span>' );

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
				$sf_select = $this.closest( '.sf-select' ),
				selected = $this.find( 'option:selected' ).text();

			$sf_select.find( 'span' ).text( selected );

		}, // selectChange










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: initFile
		 * @description: Inicia estilização para select box
		 *
		 * @param {jQuery Object} $ctn Objeto jQuery do container do input file
		 *
		 *-------------------------------------------------------------------------------------*/
		initFile : function( $ctn ) {

			console.log( 'File', $ctn );
			$ctn.addClass( 'sf-file' );

		}, // initFile










		/*--------------------------------------------------------------------------------------
		 *
		 * @name: fileChange
		 * @description: Quando o input file recebe o evento change
		 *
		 * @param {jQuery Object} $el Objeto jQuery do select
		 *
		 *-------------------------------------------------------------------------------------*/
		fileChange : function( $el ) {

			console.log( 'File', $el );
			$el.addClass( 'sf-file' );

		} // fileChange
	};











	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};

})( window, document, jQuery );