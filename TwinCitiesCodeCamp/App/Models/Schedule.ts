﻿namespace Tccc {
    export class Schedule implements Server.Schedule {
        id: string;
        eventId: string;
        timeslots: ScheduleTimeslot[];

        constructor(serverObj: Server.Schedule) {
            angular.copy(serverObj, this);
            this.timeslots = serverObj.timeslots.map(s => new ScheduleTimeslot(s));
        }
    }
}