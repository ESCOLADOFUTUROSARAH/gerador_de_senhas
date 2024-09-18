document.getElementById('generateButton').addEventListener('click', generatePasswords);

let currentPage = 1;
const passwordsPerPage = 10;
let allPasswords = [];

function generatePasswords() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const useLetters = document.getElementById('useLetters').value === 'yes';
    const useNumbers = document.getElementById('useNumbers').value === 'yes';
    const usePunctuation = document.getElementById('usePunctuation').value === 'yes';
    const useSpecialCharacters = document.getElementById('useSpecialCharacters').value === 'yes';
    const numberOfPasswords = parseInt(document.getElementById('numberOfPasswords').value);

    // Reinicia a lista de senhas a cada nova geração
    allPasswords = [];

    let characterSet = '';

    // Adicionando os caracteres ao conjunto conforme as opções
    if (useLetters) {
        characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    if (useNumbers) {
        characterSet += '0123456789';
    }
    if (usePunctuation) {
        characterSet += '.,;:?!';
    }
    if (useSpecialCharacters) {
        characterSet += '@#$%^&*()-_=+[]{}|/<>~';
    }

    // Verifica se o conjunto de caracteres está vazio
    if (characterSet === '') {
        alert('Por favor, selecione pelo menos um tipo de caractere.');
        return;
    }

    // Geração de senhas
    for (let i = 0; i < numberOfPasswords; i++) {
        let password = generatePassword(length, characterSet);

        // Verifica se a senha gerada tem o comprimento correto
        while (password.length < length) {
            password += characterSet[Math.floor(Math.random() * characterSet.length)];
        }

        allPasswords.push(password);
    }

    // Exibe as senhas e atualiza a paginação
    displayPasswords();
    updatePagination();
}

// Função que gera uma senha com o número correto de caracteres
function generatePassword(length, characterSet) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
}

function displayPasswords() {
    const start = (currentPage - 1) * passwordsPerPage;
    const end = start + passwordsPerPage;
    const currentPasswords = allPasswords.slice(start, end);

    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.innerHTML = '';

    currentPasswords.forEach((password, index) => {
        const row = `<tr><td>${start + index + 1}</td><td>${password}</td></tr>`;
        passwordOutput.innerHTML += row;
    });
}

function updatePagination() {
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = '';

    const totalPages = Math.ceil(allPasswords.length / passwordsPerPage);

    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Anterior';
        prevButton.classList.add('pagination-btn');
        prevButton.onclick = () => {
            currentPage--;
            displayPasswords();
            updatePagination();
        };
        paginationControls.appendChild(prevButton);
    }

    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Próximo';
        nextButton.classList.add('pagination-btn');
        nextButton.onclick = () => {
            currentPage++;
            displayPasswords();
            updatePagination();
        };
        paginationControls.appendChild(nextButton);
    }
}
