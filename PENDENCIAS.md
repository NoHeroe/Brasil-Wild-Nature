# PENDÊNCIAS — Brasil Wild Nature

Tudo que falta do cliente ou precisa de confirmação **antes de publicar**. Regra nº 1: **não inventar**. Onde falta dado real, o site usa um único ponto de configuração / slot documentado — nunca um número ou fato inventado.

Status: 🔴 bloqueia publicação · 🟡 melhora muito · 🟢 desejável

---

## ✅ Decisões já tomadas (não são mais pendência)

- **Produto = a agência _Brasil Wild Nature_**, não o Gin. Ele opera os passeios, mas **fica fora do holofote**: voz institucional ("nós"), sem retrato-herói dele, sem construir marca pessoal. O nome "Gin" só aparece onde é natural (ex.: depoimentos reais de clientes).
- **Sem equipe de guias no texto** (é só ele hoje) — mas também **sem spotlight pessoal**. O diferencial é apresentado como a *expertise por trás da agência*.
- **Herói do site = uma onça-pintada real** (do acervo), não a foto da pessoa no mirante.
- **Direitos das fotos: OK** — todas são do Gin.
- **Marca d'água** (nas cênicas da Chapada) = artefato de um **upscaler de IA**, não de terceiros → **eu recorto/máscaro o canto** no pipeline de imagem.
- **Depoimentos: reais** → serão **transcritos** (crédito só ao 1º nome; sem expor print/rosto).
- **Bio autorizada pelo Gin** (25 anos, raízes na Chapada, pais ligados à criação do Parque, idiomas) → posso afirmar, **reescrevendo o superlativo** "único guia capacitado em idiomas" como fato: *"guiamento direto em PT/EN/DE/ES, sem intérprete."*
- **WhatsApp/telefone:** eu defino um ponto único de config; você troca depois pelo número oficial.
- Stack: **Astro + Tailwind → Cloudflare Pages**. Node 24 disponível.

---

## 🧩 Para você preencher DEPOIS — "o que enviar e onde"

Vou construir tudo com **slots vazios e documentados**. Quando você tiver, é só soltar o arquivo no lugar ou trocar um valor. Os caminhos exatos serão confirmados quando o esqueleto existir (Fase 3); estes são os previstos:

| # | O que você envia | Onde vai (previsto) | Enquanto não chega |
|---|---|---|---|
| 1 | 🔴 **WhatsApp oficial** (confirmar (65) 99991-0685) | `src/config/site.ts` → `whatsapp` | placeholder marcado; botões já montados |
| 2 | 🔴 **E-mail** de contato | `src/config/site.ts` → `email` | placeholder |
| 3 | 🟡 **Instagram / redes** | `src/config/site.ts` → `social` | ocultos até ter |
| 4 | 🟡 **Nome/registro CADASTUR** (se houver) | `src/config/site.ts` → `cadastur` | selo oculto |
| 5 | 🟡 **Fotos de Nobres** (flutuação, nascentes) | `src/assets/nobres/` | página com aviso "fotos em breve" |
| 6 | 🟡 **Fotos de cachoeiras da Chapada** | `src/assets/chapada/` | usa as cênicas atuais |
| 7 | 🟢 **Foto do Gin** (opcional; fora do holofote) | `src/assets/sobre/` | seção "Sobre" funciona sem retrato |
| 8 | 🟡 **Fichas reais dos passeios** (duração, nível, inclui/não inclui, época, o que levar) | `src/content/tours/pt/*.md` | usa rascunho do site antigo marcado como "a confirmar" |
| 9 | 🟡 **Preços** (ou manter "sob consulta") | idem ficha | "sob consulta" |
| 10 | ✅ **Ayahuasca** — DECIDIDO: incluído | `src/content/tours/pt/ayahuasca.md` | no ar, com aviso de triagem/termo — confirmar detalhes reais |
| 11 | 🟢 Link `apoia.se/brasilwildnature` ativo? | `src/config/site.ts` → `support` | seção oculta se vazio |
| 12 | 🟡 **Revisão das traduções** EN/DE/ES (o Gin fala os 4) | `src/content/**/{en,de,es}` | traduzo e marco "revisar" |
| 13 | 🟢 Domínio + conta Cloudflare/GitHub | deploy | instruções no README |
| 14 | 🟢 Chave gratuita de formulário (Web3Forms) | `.env` → `PUBLIC_FORM_KEY` | formulário em modo "preview" |

## ❓ Decisões que ainda ajudam (não bloqueiam começar)

- ✅ **Ayahuasca:** incluído como uma das opções, com copy sóbria + aviso de triagem/termo (experiência de terceiros). Falta confirmar detalhes reais (facilitadores, datas).
- 🟡 **Lista real de passeios atuais:** os 13 passeios do site antigo estão publicados como **rascunho** em `src/content/tours/pt/*.md`, todos marcados `confirm: true` (aparecem com "* a confirmar" no site). Confirmar quais seguem valendo e os detalhes de cada ficha.
- 🟡 **Nome do passeio da Chapada**: "Morro São Jerônimo" ou "Mortuárias"?
- 🟢 **Google Business Profile** — recomendação forte (p/ turismo local costuma trazer mais cliente que o site). Criar/otimizar.
