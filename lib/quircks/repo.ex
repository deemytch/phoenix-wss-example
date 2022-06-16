defmodule Quircks.Repo do
  use Ecto.Repo,
    otp_app: :quircks,
    adapter: Ecto.Adapters.Postgres
end
