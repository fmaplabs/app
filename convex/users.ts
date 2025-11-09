import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    await ctx.db.insert("users", { email });
  },
});
