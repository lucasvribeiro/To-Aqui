<h1>To-Aqui</h1>
<p>Aplicativo de chamada via celular com código QR</p>

<h3>
  Menu de Configurações
</h3>
<ul>
  <li><a href="windows">Configurando no Windows</a></li>
  <li><a href="ios">Configurando no iOS</a></li>
  <li><a href="linux">Configurando no Linux</a></li>
  <li><a href="emulador">Configurando o Genymotion</a></li>

</ul>

<h2 id="window">Windows</h2>

<h3>iOS</h3>
<p>Infelizmente não é possivel configurar ambiente de desenvolvimento iOS no Windows, por isso, passe para o ambiente android</p>

<h3>Android</h3>
<p>Para configurar o ambiente Android no Windows, vamos precisar instalar 4 dependências: <strong>Node, Python2, JDK e Android Studio</strong></p>

<p>
<strong>NodeJS</strong><br>
Para o NodeJS, basta instalar a versão estável ou a mais recente (superior a versão 4)
</p>

<p>
<strong>Java Development Kit</strong><br>
Baixar o JDK8
</p>

<p><strong>Configurando o React</strong><br>
Após baixar e instalar o NodeJS, o Python2 e o JDK8, temos que baiar o react-native-cli. Basta rodar o comando <strong>npm install -g react-native-cli</strong><br>
Com o CLI instalado podemos rodar o comando react-native -h e ver as opções de ajuda do comando.</p>

<p><strong>Configurando o Android Studio</strong><br>
Assim que feito o Download do Android Studio, execute o instalador.<br>
No Passo "Tipo de Instalação" selecione "Custom" ou "Personalizada" e selecione os seguintes componentes:
<ul>
<li>Android SDK</li>
<li>Android SDK Platform</li>
<li>Performance (Intel® HAXM)</li>
<li>Anroid Virtual Device</li>
</ul>
</p>
<p>
Se tudo ocorrer bem, voce vera a tela inicial do Android Studio<br>
Agora, nessa tela, clique no botão "Configure" e selecione a Opção "SDK Manager"
</p>
<p><strong>Aba SDK Platforms</strong>
<br>
Você terá algum SDK instalado, mas poderá escolher algum mais atual
</p>
<p><strong>Aba SDK Tools</strong>
<br>
Escolha os seguintes itens para instalação
<ul>
  <li>Android SDK Build-Tools (Se tiver atualização, deixe marcado)</li>
  <li>LLDB</li>
  <li>Android Emulator</li>
  <li>Android SDK Platofrm-Tools (Se tiver atualização, deixe marcado)</li>
  <li>Android SDK Tools (Se tiver atualização, deixe marcado)</li>
  <ul>
    Support Repository
    	<li>ConstraintLayout for Android</li>
        <li>Solver for ConstraintLayout</li>
        <li>Android Support Repository</li>
        <li>Google Repository</li>
  </ul>
</ul>
</p>
<p>
Após a instalação dessas dependências, temos que configurar o ANDROID_HOME<br>
Ainda na aba do SDK Tools copie o caminho do SDK do Android<br>
Pesquise por "Editar Variaveis de Ambiente do Sistema" e adicione o caminho copiado ao %PATH%
</p>

