/*
  Copyright (C) 2019 by USHIN, Inc.

  This file is part of U4U.

  U4U is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  U4U is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with U4U.  If not, see <https://www.gnu.org/licenses/>.
*/

import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DeleteIconButton from '../commons/DeleteIcon';
import DataContext from '../../contexts/DataContext';
import Section from '../commons/Section';
import SimpleForm from '../commons/SimpleForm';

const Agenda = () => {
  const {
    agenda: { createAgendaItem, agendaItems, destroyAgendaItem },
  } = useContext(DataContext);

  const title = `Agenda ${new Date().toDateString()}`;

  return (
    <Section title={title}>
      <>
        <SimpleForm onSubmit={createAgendaItem} placeholder="new item" />
        <ListGroup>
          {agendaItems.map(item => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              {item.text}
              <DeleteIconButton
                handleClick={() => destroyAgendaItem(item.id)}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    </Section>
  );
};

export default Agenda;
