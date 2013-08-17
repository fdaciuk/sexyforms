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
$( 'select', 'input:radio', 'input:checkbox', 'input:file' ).sexyforms();
```



## Posso ajudar a melhorar o Sexyforms?

1. Dê um Fork no projeto!
2. Crie uma nova branch: `git checkout -b my-new-feature`
3. Comite suas alterações: `git commit -am 'Add some feature'`
4. Envie as alterações para a sua brach: `git push origin my-new-feature`
5. Submeta um Pull Request :D

## Autor

[Fernando Daciuk](https://github.com/fdaciuk)

## Todo

* Programar para input file
* Tema default para input file

## Créditos

Plugin criado utilizando o [jQuery Boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate)

## Licença

[MIT License](https://github.com/fdaciuk/sexyforms/MIT-LICENSE.md)