# 🍫 Cacau de Origem

Um projeto de UI e UX desenvolvido para apresentar, de forma imersiva e elegante, a jornada do cacau — da plantação ao produto final — destacando sua essência, origem e impacto cultural.

---

## 🧩 Estrutura do Projeto

📦 **app/**  
┣ 📂 **components/**  
┃ ┣ 📂 **navbar/** → Barra de navegação principal  
┃ ┣ 📂 **hero/** → Sessão inicial com destaque visual  
┃ ┣ 📂 **process/** → Etapas do processo do cacau (plantio, colheita, fermentação…)  
┃ ┣ 📂 **regions/** → Seção sobre regiões produtoras  
┃ ┗ 📂 **footer/** → Rodapé do site  
┣ 📂 **data/**  
┃ ┣ 📜 **regions.ts** → Lista de regiões produtoras  
┃ ┗ 📜 **process.ts** → Dados das etapas do processamento do cacau  
┣ 📜 **page.tsx** → Página inicial  
┣ 📜 **sobre/page.tsx** → Página sobre o cacau  
┗ 📜 **processo/page.tsx** → Página detalhando o processo

---

## 🛠️ Personalização

Transforme o projeto para sua marca, pesquisa ou estudo alterando:

### 🌍 Regiões Produtoras  
📁 `app/data/regions.ts`  
Edite nomes, descrições e porcentagens de produção.

### 🔄 Etapas do Processo  
📁 `app/data/process.ts`  
Modifique textos, imagens e número de etapas.

### 🎨 Hero / Imagem Principal  
📁 `app/components/hero/`  
Troque imagens, textos e animações conforme sua necessidade.

### 📸 Galeria / Ilustrações  
📁 `public/images/`  
Substitua ou adicione imagens do cacau, plantações ou produtos.

### 🌐 Navbar  
📁 `app/components/navbar/`  
Altere links, títulos, logotipo e navegação geral.

---

## 💻 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/victor-kiss/cacau-de-origem.git

# Acesse a pasta
cd cacau-de-origem

# Instale as dependências
npm install

# Execute o projeto
npm run dev
O projeto estará disponível em:
👉 http://localhost:3000

🌐 Deploy
Para hospedar na Vercel:

bash
Copiar código
npm run build
vercel --prod
Exemplo de deploy:
🔗 https://cacau-de-origem.vercel.app/

🧡 Créditos
Desenvolvido por Victor Kiss, com foco em transmitir a essência da origem do cacau de forma visual, educativa e artística.

"Cada fruto conta uma história, e cada história merece ser compartilhada."

💡 Dica Extra
Quer transformar este projeto em um site institucional, educativo ou comercial?
Basta trocar os textos, imagens e dados — toda a estrutura moderna, animações e responsividade já estão prontas.

💖 Feito com npm run cacao e muita criatividade 💖