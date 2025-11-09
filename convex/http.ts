import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
const http = httpRouter();

http.route({
  path: "/workos-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const { data } = await request.json();
    await ctx.runMutation(api.users.create, {
      email: data.email,
    });
    return new Response(null, { status: 200 });
  }),
});
export default http;
