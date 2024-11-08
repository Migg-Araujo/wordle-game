    function showAlert(msg, res) {
        document.getElementById("customAlert").style.display = "block";
        document.getElementById("res").innerText = res;
        document.getElementById("msg").innerText = msg;
        if(res.trim().toLowerCase() === 'won'){
            document.getElementById("customAlert").classList.add('won');
        }else{
            document.getElementById("customAlert").classList.add('lost');
        }

      }
      
      function closeAlert() {
        document.getElementById("customAlert").style.display = "none";
        location.reload();
      }

        function carregarConteudo(arquivo) {
            fetch(arquivo)
                .then(response => {
                    if (!response.ok) throw new Error("Erro ao carregar o conteúdo.");
                    return response.text();
                })
                .then(html => {
                    const divConteudo = document.getElementById("conteudo");
                    divConteudo.innerHTML = html;
        
                    // Executar scripts dentro do conteúdo carregado
                    const scripts = divConteudo.querySelectorAll("script");
                    scripts.forEach(script => {
                        const novoScript = document.createElement("script");
                        novoScript.textContent = script.textContent;
                        document.body.appendChild(novoScript);
                    });
                })
                .catch(error => {
                    console.error("Erro:", error);
                    document.getElementById("conteudo").innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
                });
                document.getElementById('nav').style.display = 'none';
        }