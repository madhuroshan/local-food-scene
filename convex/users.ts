import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {name: v.string(), email: v.string(), username: v.string()},
    handler: async (ctx, args) => {
        const user = await ctx.db.insert("users", {
            name: args.name,
            email: args.email,
            username: args.username
        })
    }
})

export const getUsers = query({
    args: {},
    handler: async (ctx, args) => {
        const users = await ctx.db.query("users").take(5)
        return users
    }
})