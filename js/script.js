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

        function gameInsert(game) {
            fetch(game)
                .then(response => {
                    if (!response.ok) throw new Error("Error.");
                    return response.text();
                })
                .then(html => {
                    const divGame = document.getElementById("game");
                    divGame.innerHTML = html;
        
                    const scripts = divGame.querySelectorAll("script");
                    scripts.forEach(script => {
                        const newScript = document.createElement("script");
                        newScript.textContent = script.textContent;
                        document.body.appendChild(newScript);
                    });
                })
                .catch(error => {
                    console.error("Error:", error);
                    document.getElementById("game").innerHTML = "<p>Error.</p>";
                });
                
                document.getElementById('nav').style.display = 'none';
        }