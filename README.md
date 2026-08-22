# Brazil Wild Nature — site

Site de turismo ecológico (Pantanal, Chapada dos Guimarães e Nobres), em 4 idiomas (PT, EN, DE, ES). Feito em **Astro + Tailwind**, publica de graça no **Cloudflare Pages**.

Este guia é escrito para **quem não é programador**. Você consegue trocar foto, texto, contato e até adicionar um passeio novo sozinho. Onde precisar de um passo mais técnico, está avisado.

> ⚠️ Antes de publicar, veja o [PENDENCIAS.md](PENDENCIAS.md) — a lista do que ainda falta você confirmar (telefone oficial, fotos, detalhes dos passeios etc.).

---

## 🔑 O mais importante: onde mudar cada coisa

| Você quer mudar… | Abra o arquivo | O que fazer |
|---|---|---|
| WhatsApp, e-mail, Instagram | `src/config/site.ts` | trocar o texto entre aspas |
| Uma foto | `src/assets/…` | substituir o arquivo **pelo mesmo nome** |
| Um texto do site (menu, botões, títulos) | `src/i18n/ui.ts` | trocar o texto **depois dos dois-pontos** |
| O texto/os dados de um passeio | `src/content/tours/pt/…md` | editar o passeio (ver abaixo) |
| Adicionar um passeio novo | `src/content/tours/pt/` | copiar um passeio e editar |

Depois de salvar qualquer mudança, você **publica de novo** (seção "Publicar", no fim).

---

## 1) Trocar telefone, e-mail e redes sociais

Abra **`src/config/site.ts`**. Troque só o que está entre aspas:

```ts
whatsapp: '5565999910685',            // 55 + DDD + número, só números
whatsappDisplay: '(65) 99991-0685',   // como aparece na tela
email: '',                            // deixe '' para esconder o botão de e-mail
instagram: '',                        // só o usuário, sem @ (ex: 'brasilwildnature')
```

Campo vazio (`''`) faz o site **esconder** aquele botão sozinho. Nada quebra.

## 2) Trocar uma foto

As fotos ficam em **`src/assets/`**:
- Capa (hero), destaques dos destinos, galeria (`src/assets/gallery/`) e passeios (`src/assets/tours/`).

**Jeito mais fácil:** salve sua foto nova com **o mesmo nome** do arquivo antigo, por cima. Pronto — o site otimiza sozinho (gera AVIF/WebP, vários tamanhos).

## 3) Corrigir um texto

Abra **`src/i18n/ui.ts`**. Cada linha é assim:

```ts
'hero.title': 'Onde a onça-pintada ainda reina',
```

Troque **só o texto do lado direito**, mantendo as aspas. O bloco `pt:` é o português; logo abaixo estão `en:`, `de:` e `es:` para os outros idiomas.

## 4) Editar um passeio

Cada passeio é um arquivo em **`src/content/tours/pt/`** (ex.: `safari-barco-oncas.md`). Ele tem duas partes:

```md
---
title: "Safári de barco: onça-pintada"   # nome do passeio
summary: "Expedição de barco…"            # resumo curto
duration: "6–8 h"                          # duração
effort: "Leve"                             # esforço físico
season: "Julho a outubro (seca)"           # melhor época (texto)
seasonMonths: [7, 8, 9, 10]                # meses destacados na barrinha
includes: ["Guia", "Água a bordo"]         # o que inclui
excludes: ["Refeições"]                    # o que NÃO inclui
bring: ["Câmera", "Protetor"]              # o que levar
species: ["Onça-pintada", "Jacaré"]        # bichos com chance de ver
confirm: true                              # true = mostra "* a confirmar"
---

Aqui vai o texto de descrição do passeio, em parágrafos normais.
```

Quando você confirmar os dados de um passeio, mude `confirm: true` para `confirm: false` para sumir o aviso "a confirmar".

## 5) Adicionar um passeio novo

1. Vá em `src/content/tours/pt/`, **copie** um arquivo parecido e dê um nome novo (sem espaços, ex.: `pesca-esportiva.md`).
2. Edite os campos (item 4 acima). O campo `tour:` precisa de um **código único** (ex.: `pesca-esportiva`) e `destino:` deve ser `pantanal`, `chapada` ou `nobres`.
3. Salve e publique. Ele aparece sozinho na página do destino.

> Para dar uma **foto própria** ao passeio: coloque a imagem em `src/assets/tours/` e peça para quem cuida do código ligá-la (é um passinho em `src/lib/tourImages.ts`). Sem isso, o passeio usa a foto do destino.

---

## ▶️ Rodar no seu computador (opcional)

Precisa do [Node.js](https://nodejs.org) instalado. No terminal, dentro da pasta:

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`. Para gerar a versão final:

```bash
npm run build
```

---

## 🚀 Publicar (Cloudflare Pages — grátis)

**Configuração de build:**
- Comando de build: `npm run build`
- Pasta de saída: `dist`
- Variável de ambiente: `PUBLIC_FORM_KEY` = a chave do formulário (veja abaixo)

**Opção A — pelo painel (mais simples):**
1. Crie conta em [pages.cloudflare.com](https://pages.cloudflare.com).
2. **Create a project → Connect to Git** (se o projeto estiver no GitHub) ou **Direct Upload** (arraste a pasta `dist` gerada pelo `npm run build`).
3. Se for por Git, informe o comando `npm run build` e a saída `dist`.
4. Em **Settings → Environment variables**, adicione `PUBLIC_FORM_KEY`.
5. **Deploy**. Cada atualização é só subir de novo (ou dar `git push`).

**Domínio próprio:** em **Custom domains**, aponte seu domínio (ex.: `brazilwildjaguars.com`).

### Ativar o formulário de contato
1. Entre em [web3forms.com](https://web3forms.com), informe o **e-mail que vai receber os contatos** e copie o **Access Key**.
2. No Cloudflare, coloque essa chave em `PUBLIC_FORM_KEY` (ou no arquivo `.env`, copiando de `.env.example`).
3. Republique. Enquanto a chave não existir, o site mostra o WhatsApp no lugar do formulário (nada quebra).

---

## 📁 Mapa rápido do projeto

```
src/
  config/site.ts        → contatos e identidade (MEXA AQUI)
  i18n/ui.ts            → todos os textos, nos 4 idiomas
  content/tours/pt/     → os passeios (Markdown)
  assets/              → fotos (otimizadas automaticamente)
  components/          → peças da tela (código)
  pages/               → as páginas e idiomas (código)
public/                → favicon, robots.txt
```

Dúvida sobre o que ainda falta? Está tudo em **[PENDENCIAS.md](PENDENCIAS.md)**.
