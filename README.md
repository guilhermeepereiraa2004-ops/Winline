# 🎥 Como Adicionar o Vídeo de Fundo

## Passo a Passo:

### 1. Baixar o Vídeo
1. Acesse: https://www.freepik.com/free-video/man-standing-soccer-stadium_3709739
2. Clique no botão **"Download"** (pode precisar criar conta gratuita)
3. Escolha a qualidade do vídeo (recomendo 1920x1080 ou menor para melhor performance)

### 2. Salvar o Vídeo
1. Após baixar, localize o arquivo de vídeo no seu computador
2. **RENOMEIE** o arquivo para: `hero-video.mp4`
3. **MOVA** o arquivo para a pasta: `C:\Users\Mara Rubia\Documents\Site de Dre\`
4. O arquivo deve ficar no mesmo local que o `index.html`

### 3. Verificar
Após salvar o vídeo, abra o site no navegador:
- O vídeo deve aparecer automaticamente como plano de fundo
- Ele vai tocar em loop automaticamente
- O texto ficará legível por cima do vídeo

## 📁 Estrutura de Arquivos Final:

```
Site de Dre/
├── index.html
├── style.css
├── script.js
└── hero-video.mp4  ← NOVO ARQUIVO
```

## ⚙️ Configurações do Vídeo:

O vídeo está configurado para:
- ✅ Tocar automaticamente
- ✅ Sem som (muted)
- ✅ Loop infinito
- ✅ Opacidade reduzida (40%) para não ofuscar o texto
- ✅ Overlay escuro para manter legibilidade
- ✅ Responsivo (adapta a qualquer tamanho de tela)

## 🎨 Personalizações Opcionais:

Se quiser ajustar a opacidade do vídeo, edite o arquivo `style.css` na linha que contém:
```css
opacity: 0.4;  /* Altere este valor entre 0.1 (mais transparente) e 1.0 (opaco) */
```

## ❓ Problemas?

**Vídeo não aparece?**
- Verifique se o nome do arquivo é exatamente `hero-video.mp4`
- Confirme que está na pasta correta
- Tente atualizar a página (F5)

**Vídeo muito pesado?**
- Baixe uma versão de menor qualidade (720p)
- Ou use um conversor online para reduzir o tamanho

## 🚀 Pronto!

Após seguir esses passos, seu site terá um vídeo de fundo profissional e cinematográfico! 🎬
