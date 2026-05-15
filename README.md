# 🃏 Truco Paulista Online

Truco Paulista para 2 jogadores em dispositivos diferentes, usando Firebase Realtime Database para sincronização em tempo real. Hospede gratuitamente no GitHub Pages!

## 🚀 Como Jogar (passo a passo)

### 1. Configure o Firebase (5 minutos)

1. Acesse [console.firebase.google.com](https://console.firebase.google.com/)
2. Clique em **"Criar um projeto"** → dê um nome (ex: `truco-paulista`) → continue
3. No menu lateral, vá em **Criação > Realtime Database**
4. Clique em **"Criar banco de dados"**
   - Escolha qualquer região (ex: Estados Unidos)
   - Selecione **"Iniciar no modo de teste"** → clique em "Ativar"
5. Vá em **Configurações do Projeto** (ícone ⚙️ ao lado de "Visão geral do projeto")
6. Role até **"Seus apps"** e clique em **"Adicionar app" > ícone Web (</>)**
7. Dê um apelido (qualquer) → clique em "Registrar app"
8. Você verá um objeto `firebaseConfig` — copie os valores!

### 2. Configure o arquivo `config.js`

Abra o arquivo `config.js` e substitua os valores pelos do seu Firebase:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "truco-paulista.firebaseapp.com",
  databaseURL: "https://truco-paulista-default-rtdb.firebaseio.com",
  projectId: "truco-paulista",
  storageBucket: "truco-paulista.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 3. Hospede no GitHub Pages

1. Crie um repositório no GitHub (público)
2. Faça upload dos arquivos `index.html` e `config.js`
3. Vá em **Settings > Pages**
4. Em "Source", selecione **"Deploy from a branch"** > `main` / `root`
5. Clique em **Save** — em alguns minutos seu jogo estará em:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

### 4. Jogar!

- **Jogador 1**: Abre o site, digita seu nome e clica em **"Criar Nova Sala"**
  - Um código de 4 letras aparece — compartilhe com seu amigo!
- **Jogador 2**: Abre o mesmo site, digita seu nome, insere o código e clica em **"Entrar na Sala"**
- O jogo começa automaticamente! 🎉

---

## 🎮 Regras Implementadas

### Estrutura
- **12 pontos** para vencer a partida
- Cada mão vale **2 pontos** (sem truco)
- Cartas: baralho de 40 cartas (sem 8, 9 e 10)

### Hierarquia das Cartas
As manilhas mudam a cada mão (carta seguinte à vira):
1. 🌟 **4 de Paus** (zap) — a mais forte
2. **7 de Copas**
3. **Ás de Espadas**
4. **7 de Ouros**
5. **3** de qualquer naipe
6. **2** de qualquer naipe
7. **Ás** (exceto de espadas)
8. **K** (Rei)
9. **J** (Valete)
10. **Q** (Dama)
11. **7** (exceto de copas e ouros)
12. **6**
13. **5**
14. **4** (exceto paus)

### Truco
- Qualquer jogador pode gritar Truco na sua vez
- Pedidos: **Truco (3 pts)** → **Seis** → **Nove** → **Doze**
- Respostas: **Aceitar**, **Correr** (adversário leva pts anteriores) ou **Aumentar**

### Mão de 11
- Se um jogador tiver 11 pontos, pode ver a mão antes de decidir jogar ou correr
- Se jogar, a mão vale 3 pontos; se correr, adversário leva 1 ponto

---

## 🛠️ Tecnologias

- **HTML/CSS/JS** puro — sem frameworks
- **Firebase Realtime Database** — sincronização em tempo real
- **Google Fonts** — tipografia (Abril Fatface + Nunito)
- **GitHub Pages** — hospedagem gratuita

---

## 📱 Compatibilidade

Funciona em qualquer dispositivo moderno:
- ✅ Celular (Android/iOS)
- ✅ Tablet
- ✅ Computador

---

## 🔒 Segurança (Produção)

Para uso além de amigos, troque as regras do Firebase:

```json
{
  "rules": {
    "salas": {
      "$salaId": {
        ".read": true,
        ".write": true,
        ".indexOn": ["status"]
      }
    }
  }
}
```

---

Feito com ❤️ para jogar truco com os amigos!
