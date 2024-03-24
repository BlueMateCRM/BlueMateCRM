export const leadHeaders = [
  { title: "id", value: "id" },
  { title: "recieved", value: "createdAt" },
  { title: "customer", value: "customerName" },
  { title: "phone", value: "customerPhone" },
  { title: "vehicle", value: "vehicleName" },
  { title: "origin", value: "originName" },
  { title: "destination", value: "destinationName" },
  { title: "Est. ship", value: "dateEstShip" },
];

export const orderHeaders = [
  { title: "id", value: "id" },
  { title: "quoted", value: "quoted" },
  { title: "customer", value: "customer" },
  { title: "phone", value: "phone" },
  { title: "vehicle", value: "vehicle" },
  { title: "origin", value: "origin" },
  { title: "destination", value: "destination" },
  { title: "price", value: "price" },
  { title: "Est. ship", value: "date" },
  { title: "note", value: "note" },
];

export const tasksHeaders = [
  { title: "done", value: "done" },
  { title: "id", value: "id" },
  { title: "created", value: "created" },
  { title: "task", value: "task" },
  { title: "title", value: "title" },
  { title: "customer", value: "customer" },
  { title: "phone", value: "phone" },
  { title: "email", value: "email" },
  { title: "deadline", value: "deadline" },
  { title: "user", value: "user" },
];

export const contactHeaders = [
  { title: "customer", value: "customer" },
  { title: "phone", value: "phone" },
  { title: "email", value: "email" },
  { title: "billing", value: "billing" },
  { title: "completed", value: "completed" },
  { title: "ongoing", value: "ongoing" },
  { title: "status", value: "status" },
  { title: "source", value: "source" },
  { title: "added", value: "createdAt" },
];

export const usersHeader = [
  { title: "User name", value: "username" },
  { title: "first name", value: "firstname" },
  { title: "last name", value: "lastname" },
  { title: "access role", value: "role" },
  { title: "team", value: "team" },
  { title: "position", value: "position" },
  { title: "status", value: "status" },
  { title: "User created on", value: "createdAt" },
];

export const teamsHeader = [
  { title: "Name", value: "name" },
  { title: "Users", value: "users" },
  { title: "Status", value: "status" },
  { title: "Team created on", value: "createdAt" },
];

export const rolesHeader = [
  { title: "Name", value: "name" },
  { title: "Users", value: "users" },
  { title: "Status", value: "status" },
  { title: "User created on", value: "createdAt" },
];

export const providersHeader = [
  { title: "Name", value: "name" },
  { title: "Email", value: "email" },
  { title: "Subject", value: "subject" },
  { title: "Status", value: "status" },
  { title: "Type", value: "type" },
  { title: "Created on", value: "createdAt" },
  { title: "Created by", value: "author" },
];

export const distributionHeader = [
  { title: "Users", value: "users" },
  { title: "Received today", value: "recieve" },
  { title: "Queue now", value: "queue" },
  { title: "Multiple", value: "multiple" },
  { title: "Receiving hours", value: "hours" },
  { title: "status", value: "status" },
  { title: "Paused by", value: "pausedBy" },
];

export const groundHeader = [
  { title: "Name", value: "name" },
  { title: "Status", value: "status" },
  { title: "Created on", value: "createdAt" },
  { title: "Created by", value: "author" },
  { title: "Last time edited on", value: "updatedAt" },
  { title: "Last edited by", value: "editAuthor" },
];

export const companyHeader = [
  { title: "Company name", value: "name" },
  { title: "Mainline", value: "mainline" },
  { title: "fax", value: "fax" },
  { title: "email", value: "email" },
  { title: "address", value: "address" },
];

export const merchantHeader = [
  { title: "Name", value: "name" },
  { title: "Status", value: "status" },
  { title: "Type", value: "type" },
  { title: "Created on", value: "createdAt" },
  { title: "Created by", value: "author" },
];

export const shiperHeader = [
  { title: "full.name", value: "fullname" },
  { title: "first.name", value: "firstname" },
  { title: "last.name", value: "lastname" },
  { title: "phone.1", value: "phone1" },
  { title: "phone.2", value: "phone2" },
  { title: "email", value: "email" },
];

export const locationHeader = [
  { title: "pickup_city", value: "pickup_city" },
  { title: "pickup_state", value: "pickup_state" },
  { title: "pickup_zip", value: "pickup_zip" },
  { title: "dropoff_city", value: "dropoff_city" },
  { title: "dropoff_state", value: "dropoff_state" },
  { title: "dropoff_zip", value: "dropoff_zip" },
];

export const vehicleHeader = [
  { title: "vehicle.year", value: "year" },
  { title: "vehicle.make", value: "make" },
  { title: "vehicle.model", value: "model" },
  { title: "vehicle.condition", value: "condition" },
  { title: "vehicle.type", value: "veh_type" },
  { title: "trailer.type", value: "tra_type" },
];

export const shipmentHeader = [
  { title: "est.ship.date", value: "ship_date" },
  { title: "customer.note", value: "note" },
  { title: "", value: "a" },
  { title: "", value: "b" },
  { title: "", value: "c" },
  { title: "", value: "d" },
];

export const automationHeader = [
  { title: "Name", value: "name" },
  { title: "Email template", value: "email" },
  { title: "sms template", value: "sms" },
  { title: "steps", value: "steps" },
  { title: "Delay", value: "delay" },
  { title: "Status", value: "status" },
];

export const PaymentHeaders = [
  { title: "Created", value: "created" },
  { title: "Amount", value: "amount" },
  { title: "Amount charged", value: "amount_charged" },
  { title: "Payment type", value: "Payment_type" },
  { title: "Direction", value: "direction" },
  { title: "Status", value: "status" },
];
