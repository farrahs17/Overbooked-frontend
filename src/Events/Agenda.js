import React from "react";

const Agenda = props => {
  let { agendas, handleAgendaChange, addAgenda } = props;
  return (
    <div>
      {agendas.map((val, id) => {
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
                onChange={handleAgendaChange}
                name={titleId}
                className="title"
                id={titleId}
                data-id={id}
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
                onChange={handleAgendaChange}
                name={timeId}
                className="time"
                data-id={id}
                id={timeId}
              />
            </label>
          </div>
        );
      })}
      <button
        className="btn btn-filled text-white"
        onClick={addAgenda}
        type="button"
      >
        Add new slot
      </button>
    </div>
  );
};

export default Agenda;
