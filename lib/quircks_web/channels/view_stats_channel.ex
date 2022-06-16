defmodule QuircksWeb.ViewStatsChannel do
  use QuircksWeb, :channel
  require Logger

  @impl true
  def join("view_stats", payload, socket) do
    inspect( payload, pretty: true )
    |> Logger.debug()

    {:ok, %{ responce: "Приветъ изъ вебсокетовъ." }, socket}
  end

  @impl true
  def handle_in("less", payload, socket ) do
    {:reply, {:ok, "листаю", payload}, socket}
  end


  def handle_in("ping", payload, socket) do
    {:reply, {:ok, "pong", payload}, socket}
  end

end
