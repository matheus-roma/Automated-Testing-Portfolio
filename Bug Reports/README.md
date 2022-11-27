# Bug Reports

## Issue 1: Inaccurate translation to portuguese

<br>

### Description
when switching the page language to brazilian portuguese, some texts aren't translated and others are inaccurate translated as in the table below:

<br>

| Original English        | Current translation           | Desired translation  |
|:-------------|:-------------|:-----|
|This is a Liferay Forms|Este é um Liferay Forms|Este é um Formulário Liferay|
|This is a description field from our Liferay Forms|E aqui temos a descrição do nosso forms|E aqui temos a descrição do nosso formulário|
|This is the first page of our forms.|Está é a primeira página de nosso forms.|Está é a primeira página de nosso formulário.|
|Let's party rock.|Let's party rock.|Que a festa comece.|
|Indicates Required Fields|Indicates Required Fields|Indica os campos obrigatórios|
|What is your favorite soccer player?|Qual é o seu jogador de futebol favorito?|Qual é o seu jogador de futebol favorito?|
|what was the date that Liferay was founded?|Qual foi a data que o Liferay foi fundado?|Qual foi a data que a Liferay foi fundada?|
|Why did you join the testing area?|Porque você ingressou na área de testes? |Por que você ingressou na área de testes?|
|Submit|Submeter|Submeter|

<br>
<br>

**Repro instructions (if applicable):** 

- Switch the page language to português-Brasil
- Check if all text on the page

**Other information (environment, versions etc):**

- Ubuntu 18.04.6
- Node v14.21.1

## Issue 2: Submition of invalid information

<br>

### Description
when filling the required fields with non alphanumeric characters such as simbols or punctuation and then submiting the form doesn't raises an error and allows it.

**Desired behavior:** Shows "This information is invalid." in red bellow all the fields and also do not submit the form.

**Current behavior:** Allows the submition of the form without show any error message.

**Repro instructions (if applicable):**

- Click on the first field and fill it with `!@#&()–[{}]:;',?/*~$^+=<>“.1234567890`
- Click on the second field and fill it with `10102050`
- Click on the third field and fill it with `!@#&()–[{}]:;',?/*~$^+=<>“.1234567890`
- Click on submit"

**Other information (environment, versions etc):**

- Ubuntu 18.04.6
- Node v14.21.1