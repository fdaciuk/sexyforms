# Sexyforms

Dê um belo estilo aos seus formulários com muita simplicidade e poder de personalização!

Sexyforms é uma forma simples e poderosa para estilizar campos de formulário que são praticamente impossíveis de se fazer apenas com CSS (e manter o cross-browser).

[Demonstração](http://fdaciuk.github.io/sexyforms)

## Instalação

1. Inclua o jQuery:

    ```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    ```


2. Inclua o código do plugin:

    ```html
    <script src="dist/jquery.sexyforms.min.js"></script>
    ```
    

## Como usar

Faça a chamada dos elementos que você quer que recebam a estilização:

```javascript
$( 'select, input:radio, input:checkbox, input:file' ).sexyforms();
```


## Configuração padrão do plugin

Em sua configuração padrão, o plugin:
* insere uma div _(wrapper)_ ao redor do elemento com a classe `sexyforms`;
* pega o exato posicionamento do elemento e aplica ao wrapper;
* usa o tema `default` para estilizar os campos, inserindo a classe `sf-theme-default` no wrapper.

Na wrapper, para cada campo em específico, é adicionada uma classe `sf-tipodoelemento` (`sf-select, sf-radio, sf-checkbox` e `sf-file`).

Para `select`, é criado o wrapper e um `<span>`, que vai receber o texto do `option` selecionado:

```html
<div class="sexyforms sf-select sf-theme-default">
    <select>
        <option value="" selected="selected">Selecione a opção</option>
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
    </select>
    <span>Selecione a opção</span>
</div>
```

Quando o `checkbox` ou `radio` está checado, o wrapper recebe a classe `sf-checked`.

Quando o campo recebe o foco (`focus`), o wrapper recebe a classe `sf-focus`.

Quando o campo está desabilitado, o wrapper recebe a classe `sf-disabled`.



## Opções do plugin

Para setar suas opções para o plugin, passe para a função um objeto Javascript:

```javascript
$( 'input:radio, input:checkbox, select, input:file' ).sexyforms({
    setStyle : false,
    theme : 'meu-tema'
});
```

### setStyle {boolean}

Verifica se o plugin deve aplicar a estilização para posicionamento do elemento no wrapper.

Padrão: `true`


### wrap {string}

Nome da tag que será usada como wrapper do elemento.

Padrão: `div`


### theme {string|false}

Verifica se o plugin deve usar um tema ou não. Para não usar tema algum, passe esse atributo como `false`. Para utilizar um tema próprio, somente passe o nome do tema, que será incluída a classe `sf-theme-seutema` no wrapper do elemento.

Ex:

```javascript
$( 'input:radio, input:checkbox, select, input:file' ).sexyforms({
    theme : 'meu-tema'
});
```

Isso irá incluir a classe `sf-theme-meu-tema` no wrapper dos selects e inputs radio, checkbox e file.

Padrão: `default`



## Posso ajudar a melhorar o Sexyforms?

1. Dê um Fork no projeto!
2. Crie uma nova branch: `git checkout -b my-new-feature`
3. Comite suas alterações: `git commit -am 'Add some feature'`
4. Envie as alterações para a sua brach: `git push origin my-new-feature`
5. Submeta um Pull Request :D

## Autor

[Fernando Daciuk](https://github.com/fdaciuk)

## A Fazer (todo)

> * Programar para input file
> * Tema default para input file
> * Ao receber o foco, incluir a classe `sf-focus`
> * Campos desabilitados, incluir a classe `sf-disabled`

## Créditos

Plugin criado utilizando o [jQuery Boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate)

## Licença

[MIT License](https://github.com/fdaciuk/sexyforms/blob/master/MIT-LICENSE.md)

## Changelog

[Changelog aqui](https://github.com/fdaciuk/sexyforms/blob/master/CHANGELOG.md)