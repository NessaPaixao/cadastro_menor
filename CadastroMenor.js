import React, {useState} from "react";
import Input from "../Input/Input";

import "./CadastroMenor.scss";

const CadastroMenor = () => {
  const [nomeResp, setNomeResp] = useState("");
  const [idadeResp, setIdadeResp] = useState("");
  const [cpfResp, setCpfResp] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");

  const salvarMenorDeDezoito = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/menor/', {
      method: 'POST',
      body: JSON.stringify({
        nome_responsavel: nomeResp,
        idade_resp: idadeResp,
        cpf_resp: cpfResp,
        contato: contato,
        email: email,
        senha: senha,
        nome_menor: nome,
        idade_menor: idade,
        cpf_menor: cpf,
        cep: cep,
      }),
      headers: {
        'Content-Type': 'application/json'
        }
    }).then( value => {
      return value.json()
    }).then(value => {
      if(value.id) {
        alert('Cadastrado com sucesso!');
        
      } else{
        alert('Erro ao cadastrar!')
      }
      setNomeResp("");
      setIdadeResp("");
      setCpfResp("");
      setContato("");
      setEmail("");
      setSenha("");
      setNome("");
      setIdade("");
      setCpf("");
      setCep("");
    })
  };


  return (
    <div className="CadastroMenor
">
       <div className="Texto">
            <h1>Cadastre o menor</h1>
       </div>
    
      <form onSubmit={salvarMenorDeDezoito}>
        <Input
          value={nomeResp}
          type="text"
          label="Nome completo do Responsavel"
          placeholder="Digite seu nome completo"
          atualizarState={setNomeResp}
          obrigatorio
        />
  
         <Input
          value={idadeResp}
          type="text"
          label="Idade do Responsavel"
          placeholder="Digite sua idade"
          atualizarState={setIdadeResp}
          obrigatorio
        />
         <Input
          value={cpfResp}
          type="text"
          label="CPF do Responsavel"
          placeholder="Ex.: 00000000000"
          atualizarState={setCpfResp}
          obrigatorio
        />
       
         <Input
          value={contato}
          type="text"
          label="Celular"
          placeholder="Ex.: 00000000000"
          atualizarState={setContato}
          obrigatorio
        />
        <Input
         value={email}
         type="email"
         label="Email"
         placeholder="Digite seu email"
         atualizarState={setEmail}
         obrigatorio
       />
        <Input
         value={senha}
         type="password"
         label="Senha"
         placeholder="Digite sua senha"
         atualizarState={setSenha}
         obrigatorio
       />
        <h2>Dados do Menor</h2>

        <Input
          value={nome}
          type="text"
          label="Nome do menor"
          placeholder="Digite o nome completo"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={idade}
          type="text"
          label="Idade do menor"
          placeholder="Digite a idade do menor"
          atualizarState={setIdade}
          obrigatorio
        />
         <Input
          value={cpf}
          type="text"
          label="CPF"
          placeholder="Ex.: 00000000000"
          atualizarState={setCpf}
          obrigatorio
        />
         <Input
          value={cep}
          type="text"
          label="Cep"
          placeholder="Ex.: 00000000"
          atualizarState={setCep}
          obrigatorio
        />
      <input className="cadastrar" type="submit" value={"Cadastrar"} />
      </form>
    </div>
    );
  }

export default CadastroMenor;