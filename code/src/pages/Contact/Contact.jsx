import React from "react";
import './contact.scss';
import MainContacts from "../../components/Main-contacts/MainContacts";

function Contact() {
  const contactData = [
    {
      title: "ООО Орион Консалтинг",
      subtitle: "Зарегистрированный офис:",
      name: "ООО Орион Консалтинг",
      address: `221B Бейкер-стрит  Лондон  SW1P 1WG ВЕЛИКОБРИТАНИЯ`,
      email: "office@orion.com",
      phone: "+44 (0) 12 3456 7891"
    },
    {
      title: "Медиа-центр компаний",
      subtitle: "Отдел коммуникаций",
      name: "ООО Орион Консалтинг",
      address: `221B Бейкер-стрит  Лондон  SW1P 1WG ВЕЛИКОБРИТАНИЯ`,
      email: "office@orion.com",
      phone: "+44 (0) 12 3456 7891"
    },
    {
      title: "Секретариат компании",
      subtitle: "Руперт Хопли",
      name: "ООО Орион Консалтинг",
      address: `221B Бейкер-стрит  Лондон  SW1P 1WG ВЕЛИКОБРИТАНИЯ`,
      email: "office@orion.com",
      phone: "+44 (0) 12 3456 7891"
    },
    {
      title: "Сотрудничество с инвесторами",
      subtitle: "Отдел сотрудничество",
      name: "ООО Орион Консалтинг",
      address: `221B Бейкер-стрит  Лондон  SW1P 1WG ВЕЛИКОБРИТАНИЯ`,
      email: "investorrelations@orion.com",
      phone: "+44 (0) 12 3456 7891"
    }]
  return (
    <div className="contact">
      <h1 className="contact__title">Контакты</h1>
      <p className="contact__descr">
      Для получения информации о конкретном офисе Informa воспользуйтесь инструментом "Поиск офиса" в левом меню. Чтобы связаться с нами, воспользуйтесь формой запроса по электронной почте внизу этой страницы или позвоните на наш главный коммутатор.
      </p>
      <h3 className="contact__subtitle">Международные контакты</h3>

      <div className="contact__inner">
      {contactData.map((item,idx)=>{
      return <MainContacts 
      contactTitle={item.title} 
      contactSubtitle={item.subtitle} 
      contactName={item.name} 
      contactAddress={item.address} 
      contactEmail={item.email} 
      contactPhone={item.phone} key={idx}/>
})}  
      </div> 
    </div>
  );
} 
export default Contact;