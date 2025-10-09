import { FiSettings, FiMoon, FiBell, FiGlobe } from "react-icons/fi";
import { FiUser, FiLock, FiCreditCard, FiPackage } from "react-icons/fi";
import { FiTool, FiWifi, FiDatabase, FiShield } from "react-icons/fi";

export default function Configuracoes() {

   const data = {
    geral: [
      { icon: FiSettings, title: "Preferências", description: "Configurações gerais do app" },
      { icon: FiMoon, title: "Tema", description: "Alternar claro/escuro" },
      { icon: FiBell, title: "Notificações", description: "Gerencie alertas" },
      { icon: FiGlobe, title: "Idioma", description: "Escolha o idioma do sistema" },
    ],
    conta: [
      { icon: FiUser, title: "Perfil", description: "Editar informações pessoais" },
      { icon: FiLock, title: "Senha", description: "Alterar credenciais de login" },
      { icon: FiCreditCard, title: "Pagamento", description: "Gerenciar formas de pagamento" },
      { icon: FiPackage, title: "Assinatura", description: "Detalhes da assinatura" },
    ],
    avancado: [
      { icon: FiTool, title: "Desenvolvedor", description: "Opções avançadas de debug" },
      { icon: FiWifi, title: "Rede", description: "Configurações de conexão" },
      { icon: FiDatabase, title: "Armazenamento", description: "Gerencie dados e cache" },
      { icon: FiShield, title: "Privacidade", description: "Controle de permissões" },
    ],
  };

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Configurações</h1>
      <p className="mt-2 text-gray-600">Página de configurações.</p>
    </div>
  );
}
