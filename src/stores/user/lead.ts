import { defineStore } from "pinia";
import axios from "../../api/axios.ts";
import { ILeads } from "../../models/lead.models.ts";

export type State = {
  leads: {
    data: ILeads[];
    loading: boolean;
    error: any;
    totalPages: number;
    currentPage: number;
  };
  details: {
    data: any;
    loading: boolean;
    error: any;
  };
};

export const useLeadStore = defineStore("lead", {
  state: () =>
    ({
      leads: {
        data: [],
        loading: false,
        error: null,
        totalPages: 0,
        currentPage: 0,
      },
      details: {
        data: {},
        loading: false,
        error: null,
      },
    } as State),
  actions: {
    // GET all data for table
    async getAllLeads(page: number, size: number) {
      try {
        this.leads.loading = true;
        const res: any = await axios.get(
          `/api/leads/?page=${page}&pageSize=${size}`
        );
        this.leads.data = res.data.data;
        this.leads.totalPages = res.data?.totalPages;
        this.leads.currentPage = res.data?.currentPage;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },

    // GET details for info modal
    async getLeadDetails(guid: string) {
      try {
        this.details.loading = true;
        const res: any = await axios.get(`/api/leads/${guid}/detail/`);
        this.details.data = res.data;
      } catch (error: any) {
        this.details.error = error;
      } finally {
        this.details.loading = false;
      }
    },

    // CREATE Lead
    async createLead(data: ILeads) {
      try {
        this.leads.loading = true;
        const res = await axios.post("/api/leads/create/", data);
        return res.data;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },

    // UPDATE Lead
    async updateLead(id: number, data: Required<ILeads>) {
      try {
        this.leads.loading = true;
        const res = await axios.put(`/api/leads/${id}/update/`, data);
        return res.data;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },

    // UPDATE one key of Lead
    async updateOneProperty(id: number, data: Partial<ILeads>) {
      try {
        this.leads.loading = true;
        const res = await axios.patch(`/api/leads/${id}/update/`, data);
        return res.data;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },

    // DELETE Lead
    async deleteLead(id: number) {
      try {
        this.leads.loading = true;
        const res = await axios.delete(`/api/leads/${id}/delete/`);
        return res.data;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },
  },
  getters: {},
});
