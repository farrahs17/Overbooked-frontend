import React from "react";

const Agenda = props => {
  let { agenda, handleAgendaChange, addAgenda } = props;
  return (
    <div>
      {agenda.map((val, id) => {
        let agendaId = `agenda-${id}`;
        let dateId = `date-${id}`;
        let timeId = `time-${id}`;
        let titleId = `title-${id}`;
        return (
          <div key={id}>
            <label htmlFor="agenda-title">
              Title
              <input
                type="text"
                value={agenda.title}
                onChange={handleAgendaChange}
                name={agendaId}
                className="title"
                id={titleId}
              />
            </label>
            <label htmlFor="agenda-date">
              Date
              <input
                type="date"
                name={dateId}
                className="date"
                data-id={id}
                id={dateId}
                onChange={handleAgendaChange}
              />
            </label>
            <label htmlFor="agenda-time">
              Time
              <input
                type="time"
                value={agenda.time}
                onChange={handleAgendaChange}
                name={agendaId}
                className="time"
                data-id={id}
                id={timeId}
              />
            </label>
          </div>
        );
      })}
      <button onClick={addAgenda}>Add new slot</button>
    </div>
  );
};

export default Agenda;
