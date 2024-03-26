import React from "react";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import { Separator } from "./ui/separator";

const Filter = ({ filter, setFilterField }) => {
  return (
    <>
      <Dropdown data-filter-item defaultOpen={true} label={"Conexões"}>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          1 Parada
        </Checkbox>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          2 Paradas
        </Checkbox>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          3+ Paradas
        </Checkbox>
      </Dropdown>
      <Dropdown data-filter-item label={"Horários de Partida"}>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          1 Parada
        </Checkbox>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          2 Paradas
        </Checkbox>
      </Dropdown>
      <Dropdown data-filter-item label={"Duração da Viagem"}>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          1 Parada
        </Checkbox>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          2 Paradas
        </Checkbox>
      </Dropdown>
      <Dropdown data-filter-item label={"Linhas Aéreas"}>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          1 Parada
        </Checkbox>
        <Checkbox
          id="conexao1"
          onCheckedChange={() =>
            console.log("conexão1 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          2 Paradas
        </Checkbox>
      </Dropdown>
      <Dropdown data-filter-item label={"Aeroportos"}>
        <Checkbox
          id="conexao2"
          onCheckedChange={() =>
            console.log("conexão2 foi adicionada/removida")
          }
          setValue={setFilterField}
          value={filter}
        >
          Voe e volte pelos mesmos aeroportos
        </Checkbox>
      </Dropdown>
    </>
  );
};

export default Filter;
